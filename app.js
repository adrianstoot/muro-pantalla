// Lógica de Presentación y Test Técnico para Muros Pantalla
// Optimizado para visualización en alta definición y navegación interactiva

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar iconos Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Estado Global de la Aplicación
  const state = {
    currentSlide: 0,
    totalSlides: PRESENTATION.totalSlides,
    activeChapter: 0, // 0 = Todos
    filmstripCollapsed: false,
    fitMode: 'contain', // contain | width
    autoplay: false,
    autoplayTimer: null,
    // Lightbox Pan & Zoom
    lightboxZoom: 1,
    lightboxPanX: 0,
    lightboxPanY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    // Quiz State
    quizIndex: 0,
    quizScore: 0,
    quizAnswers: {}, // index: chosenOptionIndex
    quizSubmitted: false
  };

  // Referencias al DOM
  const mainSlideImg = document.getElementById('mainSlideImg');
  const slideViewportContainer = document.getElementById('slideViewportContainer');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlidesNum = document.getElementById('totalSlidesNum');
  const slideChapterTag = document.getElementById('slideChapterTag');
  const slideNormTag = document.getElementById('slideNormTag');

  const chapterPillsContainer = document.getElementById('chapterPillsContainer');
  const filmstripContainer = document.getElementById('filmstripContainer');
  const filmstripDrawer = document.getElementById('filmstripDrawer');
  const toggleFilmstripBtn = document.getElementById('toggleFilmstripBtn');
  const toggleFilmstripText = document.getElementById('toggleFilmstripText');

  const prevSlideBtn = document.getElementById('prevSlideBtn');
  const nextSlideBtn = document.getElementById('nextSlideBtn');
  const autoplayBtn = document.getElementById('autoplayBtn');
  const autoplayIcon = document.getElementById('autoplayIcon');
  const autoplayText = document.getElementById('autoplayText');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomFitBtn = document.getElementById('zoomFitBtn');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxViewport = document.getElementById('lightboxViewport');
  const lightboxZoomIn = document.getElementById('lightboxZoomIn');
  const lightboxZoomOut = document.getElementById('lightboxZoomOut');
  const lightboxReset = document.getElementById('lightboxReset');
  const lightboxZoomLevel = document.getElementById('lightboxZoomLevel');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  // Quiz Elements
  const openQuizBtn = document.getElementById('openQuizBtn');
  const quizModal = document.getElementById('quizModal');
  const closeQuizBtn = document.getElementById('closeQuizBtn');
  const quizCurrentIndex = document.getElementById('quizCurrentIndex');
  const quizTotalQuestions = document.getElementById('quizTotalQuestions');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizQuestionText = document.getElementById('quizQuestionText');
  const quizSlideRefTag = document.getElementById('quizSlideRefTag');
  const quizOptionsContainer = document.getElementById('quizOptionsContainer');
  const quizFeedbackBox = document.getElementById('quizFeedbackBox');
  const quizFeedbackIcon = document.getElementById('quizFeedbackIcon');
  const quizFeedbackTitle = document.getElementById('quizFeedbackTitle');
  const quizFeedbackText = document.getElementById('quizFeedbackText');
  const quizScoreText = document.getElementById('quizScoreText');
  const quizPrevBtn = document.getElementById('quizPrevBtn');
  const quizNextBtn = document.getElementById('quizNextBtn');

  // ==============================================
  // 1. INICIALIZACIÓN DE CONTROLES Y RENDERIZADO
  // ==============================================

  function initApp() {
    totalSlidesNum.textContent = state.totalSlides;
    renderChapterPills();
    renderFilmstrip();
    renderSlide(0);
    setupEvents();
  }

  // Generar pastillas de navegación por capítulo
  function renderChapterPills() {
    chapterPillsContainer.innerHTML = '';

    // Botón "Todos"
    const allBtn = document.createElement('button');
    allBtn.className = 'chapter-pill px-3 py-1 rounded-lg text-xs font-medium border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 active';
    allBtn.textContent = 'Todas';
    allBtn.dataset.chapterId = '0';
    allBtn.addEventListener('click', () => {
      setActiveChapter(0);
      renderSlide(0);
    });
    chapterPillsContainer.appendChild(allBtn);

    // Botones de cada capítulo
    PRESENTATION.chapters.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'chapter-pill px-3 py-1 rounded-lg text-xs font-medium border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 whitespace-nowrap';
      btn.textContent = ch.name;
      btn.dataset.chapterId = ch.id;
      btn.addEventListener('click', () => {
        setActiveChapter(ch.id);
        renderSlide(ch.slideStart - 1);
      });
      chapterPillsContainer.appendChild(btn);
    });
  }

  function setActiveChapter(chapterId) {
    state.activeChapter = chapterId;
    const pills = chapterPillsContainer.querySelectorAll('.chapter-pill');
    pills.forEach(pill => {
      if (parseInt(pill.dataset.chapterId) === chapterId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Generar tira de miniaturas
  function renderFilmstrip() {
    filmstripContainer.innerHTML = '';
    PRESENTATION.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `thumb-card flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border border-white/10 bg-surface-850 p-1 flex items-center gap-2 w-44 hover:bg-surface-800 ${idx === 0 ? 'active-thumb' : ''}`;
      card.dataset.index = idx;

      card.innerHTML = `
        <img src="${slide.image}" alt="${slide.title}" class="w-14 h-9 object-cover rounded bg-black/40 flex-shrink-0" onerror="this.src='slides/slide-${String(idx+1).padStart(2,'0')}.jpg'" />
        <div class="overflow-hidden">
          <div class="text-[10px] font-mono text-amber-400 font-bold">SLIDE ${String(idx + 1).padStart(2, '0')}</div>
          <div class="text-[11px] text-slate-300 font-medium truncate" title="${slide.title}">${slide.title}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        renderSlide(idx);
      });

      filmstripContainer.appendChild(card);
    });
  }

  // Renderizar diapositiva activa
  function renderSlide(index) {
    if (index < 0 || index >= state.totalSlides) return;
    state.currentSlide = index;
    const slide = PRESENTATION.slides[index];

    // Actualizar Imagen con animación suave
    mainSlideImg.style.opacity = '0.5';
    mainSlideImg.src = slide.image;
    mainSlideImg.onerror = () => {
      mainSlideImg.src = `slides/slide-${String(index + 1).padStart(2, '0')}.jpg`;
    };
    setTimeout(() => {
      mainSlideImg.style.opacity = '1';
    }, 50);

    // Actualizar Textos y Badges
    currentSlideNum.textContent = String(index + 1).padStart(2, '0');
    slideChapterTag.textContent = slide.chapterName;
    slideNormTag.textContent = slide.normative;

    // Actualizar capítulo activo en la barra superior si corresponde
    if (state.activeChapter !== slide.chapterId) {
      setActiveChapter(slide.chapterId);
    }

    // Actualizar estado de miniaturas en el filmstrip
    const thumbs = filmstripContainer.querySelectorAll('.thumb-card');
    thumbs.forEach((thumb, idx) => {
      if (idx === index) {
        thumb.classList.add('active-thumb');
        // Auto-scroll para mantener visible la miniatura activa
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active-thumb');
      }
    });
  }

  function nextSlide() {
    if (state.currentSlide < state.totalSlides - 1) {
      renderSlide(state.currentSlide + 1);
    } else {
      renderSlide(0); // Bucle al inicio
    }
  }

  function prevSlide() {
    if (state.currentSlide > 0) {
      renderSlide(state.currentSlide - 1);
    } else {
      renderSlide(state.totalSlides - 1); // Bucle al final
    }
  }

  // ==============================================
  // 2. TOGGLE TIRA DE DIAPOSITIVAS Y AJUSTE VISUAL
  // ==============================================

  function toggleFilmstrip() {
    state.filmstripCollapsed = !state.filmstripCollapsed;
    if (state.filmstripCollapsed) {
      filmstripDrawer.classList.add('h-0', 'py-0', 'border-t-0', 'opacity-0');
      filmstripDrawer.classList.remove('h-20', 'px-4', 'opacity-100');
      slideViewportContainer.classList.remove('h-[calc(100vh-9.5rem)]');
      slideViewportContainer.classList.add('h-[calc(100vh-4.5rem)]');
      mainSlideImg.classList.remove('fit-contain');
      mainSlideImg.classList.add('fit-contain-collapsed');
      toggleFilmstripText.textContent = 'Mostrar Tira (B)';
    } else {
      filmstripDrawer.classList.remove('h-0', 'py-0', 'border-t-0', 'opacity-0');
      filmstripDrawer.classList.add('h-20', 'px-4', 'opacity-100');
      slideViewportContainer.classList.add('h-[calc(100vh-9.5rem)]');
      slideViewportContainer.classList.remove('h-[calc(100vh-4.5rem)]');
      mainSlideImg.classList.add('fit-contain');
      mainSlideImg.classList.remove('fit-contain-collapsed');
      toggleFilmstripText.textContent = 'Ocultar Tira (B)';
    }
  }

  function toggleFitMode() {
    if (state.fitMode === 'contain') {
      state.fitMode = 'width';
      mainSlideImg.classList.remove('fit-contain', 'fit-contain-collapsed');
      mainSlideImg.classList.add('fit-width');
      slideViewportContainer.classList.add('overflow-y-auto');
    } else {
      state.fitMode = 'contain';
      mainSlideImg.classList.remove('fit-width');
      slideViewportContainer.classList.remove('overflow-y-auto');
      if (state.filmstripCollapsed) {
        mainSlideImg.classList.add('fit-contain-collapsed');
      } else {
        mainSlideImg.classList.add('fit-contain');
      }
    }
  }

  // Autoplay
  function toggleAutoplay() {
    state.autoplay = !state.autoplay;
    if (state.autoplay) {
      autoplayText.textContent = 'Pausa (P)';
      autoplayIcon.setAttribute('data-lucide', 'pause');
      autoplayBtn.classList.add('border-amber-500/50', 'bg-amber-500/10', 'text-amber-300');
      state.autoplayTimer = setInterval(() => {
        nextSlide();
      }, 5500);
    } else {
      autoplayText.textContent = 'Auto (P)';
      autoplayIcon.setAttribute('data-lucide', 'play');
      autoplayBtn.classList.remove('border-amber-500/50', 'bg-amber-500/10', 'text-amber-300');
      if (state.autoplayTimer) clearInterval(state.autoplayTimer);
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error("Error intentando pantalla completa:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // ==============================================
  // 3. LIGHTBOX INTERACTIVO (ZOOM Y PAN)
  // ==============================================

  function openLightbox() {
    const slide = PRESENTATION.slides[state.currentSlide];
    lightboxImg.src = slide.image;
    lightboxImg.onerror = () => {
      lightboxImg.src = `slides/slide-${String(state.currentSlide + 1).padStart(2, '0')}.jpg`;
    };
    lightboxTitle.textContent = `${String(state.currentSlide + 1).padStart(2, '0')} • ${slide.title}`;
    resetLightboxTransform();
    lightboxModal.classList.remove('hidden');
  }

  function closeLightbox() {
    lightboxModal.classList.add('hidden');
  }

  function resetLightboxTransform() {
    state.lightboxZoom = 1;
    state.lightboxPanX = 0;
    state.lightboxPanY = 0;
    updateLightboxTransform();
  }

  function updateLightboxTransform() {
    lightboxImg.style.transform = `scale(${state.lightboxZoom}) translate(${state.lightboxPanX}px, ${state.lightboxPanY}px)`;
    lightboxZoomLevel.textContent = `${Math.round(state.lightboxZoom * 100)}%`;
  }

  // Eventos de ratón para Lightbox
  lightboxViewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.2 : 0.8;
    state.lightboxZoom = Math.min(Math.max(state.lightboxZoom * zoomFactor, 0.8), 5);
    updateLightboxTransform();
  });

  lightboxViewport.addEventListener('mousedown', (e) => {
    state.isDragging = true;
    state.dragStartX = e.clientX - state.lightboxPanX;
    state.dragStartY = e.clientY - state.lightboxPanY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDragging) return;
    state.lightboxPanX = (e.clientX - state.dragStartX);
    state.lightboxPanY = (e.clientY - state.dragStartY);
    updateLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    state.isDragging = false;
  });

  lightboxZoomIn.addEventListener('click', () => {
    state.lightboxZoom = Math.min(state.lightboxZoom * 1.3, 5);
    updateLightboxTransform();
  });

  lightboxZoomOut.addEventListener('click', () => {
    state.lightboxZoom = Math.max(state.lightboxZoom / 1.3, 0.8);
    updateLightboxTransform();
  });

  lightboxReset.addEventListener('click', resetLightboxTransform);
  closeLightboxBtn.addEventListener('click', closeLightbox);

  // ==============================================
  // 4. TEST TÉCNICO INTERACTIVO (15 PREGUNTAS)
  // ==============================================

  function openQuiz() {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswers = {};
    renderQuizQuestion(0);
    quizModal.classList.remove('hidden');
  }

  function closeQuiz() {
    quizModal.classList.add('hidden');
  }

  function renderQuizQuestion(index) {
    if (index < 0 || index >= PRESENTATION.quiz.length) return;
    state.quizIndex = index;
    const q = PRESENTATION.quiz[index];

    quizCurrentIndex.textContent = index + 1;
    quizTotalQuestions.textContent = PRESENTATION.quiz.length;
    quizProgressBar.style.width = `${((index + 1) / PRESENTATION.quiz.length) * 100}%`;
    quizSlideRefTag.textContent = `Ref: Diapositiva ${q.slideRef}`;
    quizQuestionText.textContent = q.question;

    quizOptionsContainer.innerHTML = '';
    const hasAnswered = state.quizAnswers.hasOwnProperty(index);
    const chosenIndex = state.quizAnswers[index];

    q.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'quiz-opt w-full text-left p-3.5 rounded-xl border border-white/10 bg-surface-850 hover:bg-surface-800 text-slate-200 text-xs sm:text-sm font-medium flex items-center justify-between group';
      
      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
      optBtn.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-lg bg-surface-950/80 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-amber-400 group-hover:border-amber-400/50">
            ${letter}
          </span>
          <span>${optText}</span>
        </div>
        <div class="opt-status-icon"></div>
      `;

      if (hasAnswered) {
        optBtn.classList.add('disabled', 'pointer-events-none');
        if (optIdx === q.correct) {
          optBtn.classList.add('correct');
          optBtn.querySelector('.opt-status-icon').innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-400"></i>';
        } else if (optIdx === chosenIndex) {
          optBtn.classList.add('incorrect');
          optBtn.querySelector('.opt-status-icon').innerHTML = '<i data-lucide="x-circle" class="w-5 h-5 text-rose-400"></i>';
        }
      } else {
        optBtn.addEventListener('click', () => {
          submitQuizAnswer(index, optIdx);
        });
      }

      quizOptionsContainer.appendChild(optBtn);
    });

    // Feedback Box
    if (hasAnswered) {
      quizFeedbackBox.classList.remove('hidden');
      const isCorrect = chosenIndex === q.correct;
      if (isCorrect) {
        quizFeedbackBox.className = 'p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-200';
        quizFeedbackIcon.innerHTML = '<i data-lucide="check" class="w-5 h-5 text-emerald-400"></i>';
        quizFeedbackTitle.textContent = '¡RESPUESTA CORRECTA!';
        quizFeedbackTitle.className = 'text-xs font-bold uppercase tracking-wider mb-1 text-emerald-400';
      } else {
        quizFeedbackBox.className = 'p-4 rounded-xl border border-rose-500/30 bg-rose-950/20 text-rose-200';
        quizFeedbackIcon.innerHTML = '<i data-lucide="alert-triangle" class="w-5 h-5 text-rose-400"></i>';
        quizFeedbackTitle.textContent = 'RESPUESTA INCORRECTA';
        quizFeedbackTitle.className = 'text-xs font-bold uppercase tracking-wider mb-1 text-rose-400';
      }
      quizFeedbackText.textContent = q.explanation;
    } else {
      quizFeedbackBox.classList.add('hidden');
    }

    quizScoreText.textContent = `${state.quizScore} / ${PRESENTATION.quiz.length}`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function submitQuizAnswer(qIndex, chosenIndex) {
    const q = PRESENTATION.quiz[qIndex];
    state.quizAnswers[qIndex] = chosenIndex;
    if (chosenIndex === q.correct) {
      state.quizScore++;
    }
    renderQuizQuestion(qIndex);
  }

  quizPrevBtn.addEventListener('click', () => {
    if (state.quizIndex > 0) {
      renderQuizQuestion(state.quizIndex - 1);
    }
  });

  quizNextBtn.addEventListener('click', () => {
    if (state.quizIndex < PRESENTATION.quiz.length - 1) {
      renderQuizQuestion(state.quizIndex + 1);
    } else {
      // Mostrar pantalla de resultados finales si ya se completó
      showQuizSummary();
    }
  });

  function showQuizSummary() {
    const total = PRESENTATION.quiz.length;
    const score = state.quizScore;
    const percentage = Math.round((score / total) * 100);

    let gradeMsg = "";
    if (percentage >= 90) gradeMsg = "¡Excelente! Nivel de Experto Geotécnico";
    else if (percentage >= 70) gradeMsg = "¡Aprobado! Buen dominio técnico de ejecución de pantallas";
    else gradeMsg = "Necesita Repaso de Normativa y Fases Operativas";

    quizOptionsContainer.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500/50 text-amber-400 text-3xl font-mono font-bold">
          ${percentage}%
        </div>
        <div>
          <h4 class="text-lg font-bold text-white">${gradeMsg}</h4>
          <p class="text-xs text-slate-400 mt-1">Has acertado ${score} de ${total} preguntas técnicas sobre Muros Pantalla.</p>
        </div>
        <div class="pt-4 flex justify-center gap-3">
          <button id="restartQuizBtn" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            <span>Repetir Test</span>
          </button>
          <button id="closeSummaryBtn" class="px-4 py-2 rounded-xl glass-ui text-xs font-semibold text-slate-200 hover:text-white border border-white/10">
            Finalizar
          </button>
        </div>
      </div>
    `;

    quizFeedbackBox.classList.add('hidden');
    document.getElementById('restartQuizBtn').addEventListener('click', () => {
      openQuiz();
    });
    document.getElementById('closeSummaryBtn').addEventListener('click', closeQuiz);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // ==============================================
  // 5. CONFIGURACIÓN DE EVENTOS Y TECLADO
  // ==============================================

  function setupEvents() {
    // Botones de navegación
    prevSlideBtn.addEventListener('click', prevSlide);
    nextSlideBtn.addEventListener('click', nextSlide);
    toggleFilmstripBtn.addEventListener('click', toggleFilmstrip);
    zoomFitBtn.addEventListener('click', toggleFitMode);
    zoomInBtn.addEventListener('click', openLightbox);
    autoplayBtn.addEventListener('click', toggleAutoplay);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Doble clic sobre la imagen principal para ampliar
    mainSlideImg.addEventListener('dblclick', openLightbox);

    // Modal Quiz
    openQuizBtn.addEventListener('click', openQuiz);
    closeQuizBtn.addEventListener('click', closeQuiz);

    // Atajos de Teclado Globales
    window.addEventListener('keydown', (e) => {
      // Ignorar si se está escribiendo en un input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();

      // Cerrar modales con Escape
      if (key === 'escape') {
        if (!lightboxModal.classList.contains('hidden')) {
          closeLightbox();
        } else if (!quizModal.classList.contains('hidden')) {
          closeQuiz();
        }
        return;
      }

      // Si el Lightbox está abierto
      if (!lightboxModal.classList.contains('hidden')) {
        if (key === '+' || key === '=') {
          state.lightboxZoom = Math.min(state.lightboxZoom * 1.3, 5);
          updateLightboxTransform();
        } else if (key === '-' || key === '_') {
          state.lightboxZoom = Math.max(state.lightboxZoom / 1.3, 0.8);
          updateLightboxTransform();
        } else if (key === '0') {
          resetLightboxTransform();
        }
        return;
      }

      // Si el Quiz está abierto
      if (!quizModal.classList.contains('hidden')) {
        if (key === 'arrowright') {
          quizNextBtn.click();
        } else if (key === 'arrowleft') {
          quizPrevBtn.click();
        }
        return;
      }

      // Atajos de Presentación Principal
      if (key === 'arrowright' || key === ' ' || key === 'd') {
        e.preventDefault();
        nextSlide();
      } else if (key === 'arrowleft' || key === 'a') {
        e.preventDefault();
        prevSlide();
      } else if (key === 'b') {
        e.preventDefault();
        toggleFilmstrip();
      } else if (key === 'z') {
        e.preventDefault();
        openLightbox();
      } else if (key === 'w') {
        e.preventDefault();
        toggleFitMode();
      } else if (key === 'p') {
        e.preventDefault();
        toggleAutoplay();
      } else if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === 't') {
        e.preventDefault();
        openQuiz();
      }
    });
  }

  // Arrancar la app
  initApp();
});
