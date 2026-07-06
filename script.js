const QUIZ_QUESTION_COUNT = 20;
const PASS_SCORE = 95;

const state = {
  activeQuestions: [],
  answers: [],
  current: 0,
  result: null,
};

const totalCount = document.querySelector('#total-count');
const quizCount = document.querySelector('#quiz-count');
const passScoreText = document.querySelector('#pass-score-text');
const startBtn = document.querySelector('#start-btn');
const quizCard = document.querySelector('#quiz-card');
const resultCard = document.querySelector('#result-card');
const progressText = document.querySelector('#progress-text');
const questionTitle = document.querySelector('#question-title');
const categoryPill = document.querySelector('#category-pill');
const optionsForm = document.querySelector('#options-form');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const resultTitle = document.querySelector('#result-title');
const resultSummary = document.querySelector('#result-summary');
const retryBtn = document.querySelector('#retry-btn');
const reviewBtn = document.querySelector('#review-btn');
const reviewList = document.querySelector('#review-list');

totalCount.textContent = QUESTIONS.length;
quizCount.textContent = QUIZ_QUESTION_COUNT;
passScoreText.textContent = `${PASS_SCORE}%`;

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function prepareQuestion(question) {
  const shuffledOptions = shuffle(question.options.map((option, index) => ({ option, originalIndex: index })));
  return {
    ...question,
    options: shuffledOptions.map((item) => item.option),
    answer: shuffledOptions.findIndex((item) => item.originalIndex === question.answer),
  };
}

function startQuiz() {
  const count = Math.min(QUIZ_QUESTION_COUNT, QUESTIONS.length);
  state.activeQuestions = shuffle(QUESTIONS).slice(0, count).map(prepareQuestion);
  state.answers = Array(count).fill(null);
  state.current = 0;
  state.result = null;
  reviewList.classList.add('hidden');
  reviewList.innerHTML = '';
  resultCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const question = state.activeQuestions[state.current];
  progressText.textContent = `第 ${state.current + 1} / ${state.activeQuestions.length} 题`;
  questionTitle.textContent = question.question;
  categoryPill.textContent = question.category;
  optionsForm.innerHTML = '';

  question.options.forEach((option, index) => {
    const id = `q-${state.current}-o-${index}`;
    const label = document.createElement('label');
    label.className = 'option';
    label.setAttribute('for', id);
    label.innerHTML = `
      <input id="${id}" type="radio" name="answer" value="${index}" ${state.answers[state.current] === index ? 'checked' : ''}>
      <span>${escapeHtml(option)}</span>
    `;
    optionsForm.append(label);
  });

  prevBtn.disabled = state.current === 0;
  nextBtn.textContent = state.current === state.activeQuestions.length - 1 ? '提交' : '下一题';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function saveCurrentAnswer() {
  const checked = optionsForm.querySelector('input[name="answer"]:checked');
  state.answers[state.current] = checked ? Number(checked.value) : null;
}

function next() {
  saveCurrentAnswer();
  if (state.answers[state.current] === null) {
    alert('请选择一个答案后再继续。');
    return;
  }

  if (state.current < state.activeQuestions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }

  finishQuiz();
}

function previous() {
  saveCurrentAnswer();
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
}

function finishQuiz() {
  const details = state.activeQuestions.map((question, index) => {
    const selected = state.answers[index];
    return {
      question,
      selected,
      correct: selected === question.answer,
    };
  });
  const correctCount = details.filter((item) => item.correct).length;
  const percent = Math.round((correctCount / details.length) * 100);
  const passLine = PASS_SCORE;
  state.result = { details, correctCount, percent, passLine };

  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
  resultTitle.textContent = percent >= passLine ? '通过验证' : '未达到通过线';
  resultTitle.style.color = percent >= passLine ? 'var(--success)' : 'var(--danger)';
  resultSummary.textContent = `你答对 ${correctCount} / ${details.length} 题，得分 ${percent}%，通过线为 ${passLine}%。`;
  renderReview(false);
}

function renderReview(showAll) {
  if (!state.result) return;
  const items = showAll ? state.result.details : state.result.details.filter((item) => !item.correct);
  reviewList.innerHTML = '';

  if (items.length === 0) {
    reviewList.innerHTML = '<div class="review-item correct"><h3>全部答对</h3><p>没有错题，继续保持。</p></div>';
    return;
  }

  items.forEach((item) => {
    const div = document.createElement('div');
    div.className = `review-item ${item.correct ? 'correct' : ''}`;
    const selectedText = item.selected === null ? '未作答' : item.question.options[item.selected];
    const correctText = item.question.options[item.question.answer];
    div.innerHTML = `
      <h3>${escapeHtml(item.question.question)}</h3>
      <p><strong>你的答案：</strong>${escapeHtml(selectedText)}</p>
      <p><strong>正确答案：</strong>${escapeHtml(correctText)}</p>
      <p><strong>解析：</strong>${escapeHtml(item.question.explanation)}</p>
      <p><a href="${escapeHtml(item.question.source)}" target="_blank" rel="noreferrer">查看来源文档</a></p>
    `;
    reviewList.append(div);
  });
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', previous);
retryBtn.addEventListener('click', startQuiz);
reviewBtn.addEventListener('click', () => {
  const isHidden = reviewList.classList.toggle('hidden');
  if (!isHidden) {
    renderReview(false);
    reviewBtn.textContent = '收起错题';
  } else {
    reviewBtn.textContent = '查看错题';
  }
});
