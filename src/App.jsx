import { useEffect, useState } from 'react';
import './App.css';
import moon from "./img/moon.svg";
import sun from "./img/sun.svg";
import Acs from "./img/Acs.png";
import CSS from "./img/CSS.png";
import HTML from "./img/HTML.png";
import JS from "./img/JS.png";
import wrong from "./img/wrong.png"

const Questions = {
  HTML: [
    {
      question: "HTML'nin açılımı nedir?",
      options: ["HyperText Markup Language", "HyperLink Markup Language", "HighText Markup Language", "HyperText Machine Language", "HyperLink Machine Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "HTML sayfasının başlığını belirleyen etiket hangisidir?",
      options: ["<title>", "<head>", "<meta>", "<header>", "<h1>"],
      answer: "<title>"
    },
    {
      question: "HTML'de bir bağlantıyı oluşturmak için hangi etiket kullanılır?",
      options: ["<link>", "<a>", "<href>", "<anchor>", "<url>"],
      answer: "<a>"
    },
    {
      question: "HTML'de bir resim eklemek için hangi etiket kullanılır?",
      options: ["<img>", "<picture>", "<image>", "<src>", "<media>"],
      answer: "<img>"
    },
    {
      question: "HTML'de bir liste oluşturmak için kullanılan etiketler nelerdir?",
      options: ["<list>, <item>", "<ul>, <li>", "<ol>, <item>", "<table>, <row>", "<dl>, <dt>"],
      answer: "<ul>, <li>"
    },
    {
      question: "HTML'de bir tablonun başlık satırını tanımlamak için hangi etiket kullanılır?",
      options: ["<thead>", "<tfoot>", "<tbody>", "<tr>", "<th>"],
      answer: "<thead>"
    },
    {
      question: "HTML'de bir form oluşturmak için hangi etiket kullanılır?",
      options: ["<form>", "<input>", "<button>", "<fieldset>", "<submit>"],
      answer: "<form>"
    },
    {
      question: "HTML'de yorum satırı eklemek için hangi işaretleme kullanılır?",
      options: ["<!-- yorum -->", "<!--- yorum --->", "<-- yorum -->", "// yorum", "# yorum"],
      answer: "<!-- yorum -->"
    },
    {
      question: "HTML'de stil sayfasını bağlamak için hangi etiket kullanılır?",
      options: ["<script>", "<link>", "<style>", "<meta>", "<css>"],
      answer: "<link>"
    },
    {
      question: "HTML'de metin içi stil uygulamak için hangi etiket kullanılır?",
      options: ["<span>", "<div>", "<p>", "<em>", "<strong>"],
      answer: "<span>"
    }
  ],
  CSS: [
    {
      question: "CSS'nin açılımı nedir?",
      options: ["Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "CSS'de bir stil tanımlamak için hangi etiket kullanılır?",
      options: ["<style>", "<css>", "<script>", "<link>", "<stylesheet>"],
      answer: "<style>"
    },
    {
      question: "CSS'de bir elementi seçmek için hangi yöntem kullanılır?",
      options: ["Class", "ID", "Element", "Attribute", "Pseudo-class"],
      answer: "Class"
    },
    {
      question: "CSS'de renk kodlarını hangi formatlarda kullanabilirsiniz?",
      options: ["HEX, RGB, HSL", "HEX, CMYK, LAB", "RGB, HSL, LAB", "HEX, CMYK, LAB", "RGB, CMYK, LAB"],
      answer: "HEX, RGB, HSL"
    },
    {
      question: "CSS'de bir öğenin arka plan rengini nasıl değiştirebilirsiniz?",
      options: ["background-color", "color", "border-color", "background-image", "background"],
      answer: "background-color"
    },
    {
      question: "CSS'de yazı tipi boyutunu ayarlamak için hangi özellik kullanılır?",
      options: ["font-size", "text-size", "font-style", "text-font", "size"],
      answer: "font-size"
    },
    {
      question: "CSS'de bir öğenin kenar boşluklarını ayarlamak için hangi özellik kullanılır?",
      options: ["padding", "margin", "border", "spacing", "outline"],
      answer: "margin"
    },
    {
      question: "CSS'de bir öğenin iç boşluklarını ayarlamak için hangi özellik kullanılır?",
      options: ["padding", "margin", "border", "gap", "space"],
      answer: "padding"
    },
    {
      question: "CSS'de bir öğeyi yatay ve dikey olarak ortalamak için hangi özellik kullanılır?",
      options: ["align", "justify", "text-align", "margin", "flex"],
      answer: "flex"
    },
    {
      question: "CSS'de bir öğenin gizlenmesini sağlamak için hangi özellik kullanılır?",
      options: ["display: none;", "visibility: hidden;", "opacity: 0;", "position: absolute;", "float: none;"],
      answer: "display: none;"
    }
  ],
  JS: [
    {
      question: "JavaScript'te değişken tanımlamak için hangi anahtar kelime kullanılır?",
      options: ["var", "let", "const", "var, let, const", "let, const"],
      answer: "var, let, const"
    },
    {
      question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
      options: ["function myFunction() {}", "func myFunction() {}", "define myFunction() {}", "function: myFunction() {}", "fn myFunction() {}"],
      answer: "function myFunction() {}"
    },
    {
      question: "JavaScript'te bir diziye nasıl erişilir?",
      options: ["array[index]", "array.get(index)", "array[index+1]", "array.at(index)", "array[index] or array.get(index)"],
      answer: "array[index]"
    },
    {
      question: "JavaScript'te olay dinleyicisi nasıl eklenir?",
      options: ["element.addEventListener('event', callback)", "element.on('event', callback)", "element.addEvent('event', callback)", "element.listen('event', callback)", "element.eventListener('event', callback)"],
      answer: "element.addEventListener('event', callback)"
    },
    {
      question: "JavaScript'te bir nesne nasıl oluşturulur?",
      options: ["let obj = {}", "let obj = new Object()", "let obj = Object.create()", "let obj = new Object({})", "let obj = {} or let obj = new Object()"],
      answer: "let obj = {} or let obj = new Object()"
    },
    {
      question: "JavaScript'te bir dizeyi (string) nasıl birleştirirsiniz?",
      options: ["string1 + string2", "concat(string1, string2)", "append(string1, string2)", "string1.add(string2)", "string1.merge(string2)"],
      answer: "string1 + string2"
    },
    {
      question: "JavaScript'te bir değeri tam sayıya dönüştürmek için hangi fonksiyon kullanılır?",
      options: ["parseInt()", "toInteger()", "convertToInt()", "int()", "parseNumber()"],
      answer: "parseInt()"
    },
    {
      question: "JavaScript'te bir döngü oluşturmak için hangi yapı kullanılır?",
      options: ["for, while, do...while", "loop, iterate, repeat", "foreach, until, loop", "forEach, iterate, repeat", "loop, while, forEach"],
      answer: "for, while, do...while"
    },
    {
      question: "JavaScript'te bir nesnenin bir özelliğine nasıl erişirsiniz?",
      options: ["object.property", "object[property]", "object->property", "object.get(property)", "object.access(property)"],
      answer: "object.property or object[property]"
    },
    {
      question: "JavaScript'te bir değişkenin türünü öğrenmek için hangi fonksiyon kullanılır?",
      options: ["typeof", "type", "instanceof", "classOf", "getType"],
      answer: "typeof"
    }
  ],
  Accessibility: [
    {
      question: "A11y nedir?",
      options: ["Erişilebilirlik", "Web tarayıcısı", "Yazılım geliştirme", "Kullanıcı arayüzü", "Eğitim"],
      answer: "Erişilebilirlik"
    },
    {
      question: "Ekran okuyucular hangi kullanıcılar için kullanılır?",
      options: ["Görme engelli kullanıcılar", "Görme engelli ve işitme engelli kullanıcılar", "Görme engelli ve motor beceri sorunu yaşayan kullanıcılar", "İşitme engelli kullanıcılar", "Motor beceri sorunu yaşayan kullanıcılar"],
      answer: "Görme engelli kullanıcılar"
    },
    {
      question: "A11y uygulamalarında 'alt' metin ne amaçla kullanılır?",
      options: ["Görme engelli kullanıcılar için resim açıklaması", "Görme engelli kullanıcılar için ses açıklaması", "İşitme engelli kullanıcılar için video açıklaması", "Web sayfasının başlığı", "Yazı tipi açıklaması"],
      answer: "Görme engelli kullanıcılar için resim açıklaması"
    },
    {
      question: "Tabloların erişilebilirliği nasıl sağlanır?",
      options: ["Tablo başlıkları ve açıklamaları ekleyerek", "Renk kontrastını artırarak", "Tabloları resim olarak sunarak", "Tabloları yalnızca metin olarak sunarak", "Tabloları yalnızca görsel olarak sunarak"],
      answer: "Tablo başlıkları ve açıklamaları ekleyerek"
    },
    {
      question: "Erişilebilirlik açısından 'aria-label' nedir?",
      options: ["Bir öğeye erişilebilirlik açıklaması ekler", "Bir öğenin görsel stilini değiştirir", "Bir öğenin renk kontrastını artırır", "Bir öğeye ses efekti ekler", "Bir öğenin konumunu değiştirir"],
      answer: "Bir öğeye erişilebilirlik açıklaması ekler"
    },
    {
      question: "ARIA (Accessible Rich Internet Applications) nedir?",
      options: ["Web erişilebilirliğini artırmak için kullanılan bir dizi etiket ve özellik", "Web sayfalarını hızlı yüklemek için kullanılan bir teknoloji", "Görsel tasarımı iyileştirmek için kullanılan bir stil kiti", "Veri tabanları ile ilgili bir erişim yönetim aracı", "Web tarayıcılarının performansını artıran bir yazılım"],
      answer: "Web erişilebilirliğini artırmak için kullanılan bir dizi etiket ve özellik"
    },
    {
      question: "Erişilebilirlik açısından form etiketleri neden önemlidir?",
      options: ["Ekran okuyucuların form alanlarını doğru şekilde tanıyabilmesi için", "Formları daha hızlı yüklemek için", "Kullanıcıların form verilerini hızlıca girmesi için", "Formların görsel tasarımını iyileştirmek için", "Formları otomatik olarak doldurmak için"],
      answer: "Ekran okuyucuların form alanlarını doğru şekilde tanıyabilmesi için"
    },
    {
      question: "Hangi HTML etiketi, görme engelli kullanıcılar için video açıklamaları eklemeye yardımcı olur?",
      options: ["<track>", "<video>", "<audio>", "<source>", "<caption>"],
      answer: "<track>"
    },
    {
      question: "Erişilebilirlik açısından 'focus' yönetimi neden önemlidir?",
      options: ["Klavye ile gezinmeyi ve etkileşimi kolaylaştırmak için", "Renk kontrastını iyileştirmek için", "Görsel öğeleri düzenlemek için", "Web sayfalarının hızını artırmak için", "Formları doğrulamak için"],
      answer: "Klavye ile gezinmeyi ve etkileşimi kolaylaştırmak için"
    },
    {
      question: "Hangi HTML özelliği, kullanıcıların web içeriği ile etkileşimde bulunurken erişilebilirlik desteği sağlar?",
      options: ["tabindex", "aria-hidden", "role", "aria-live", "alt"],
      answer: "tabindex"
    }
  ]
};

const topics = {
  HTML: HTML,
  CSS: CSS,
  JS: JS,
  Accessibility: Acs
};

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setScore(0);
    setQuizFinished(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleFinish = () => {
    setQuizFinished(true);
  };

  const handleReset = () => {
    setSelectedTopic(null);
    setQuizFinished(false);
  };

  return (
    <div className="container">
      <Header />
      {!selectedTopic ? (
        <QuizSelector topics={Object.keys(Questions)} onSelect={handleTopicSelect} />
      ) : quizFinished ? (
        <div className="results-screen">
          <div className="ResultsText">
            <h3>Quiz Tamamlandı!</h3>
            <h2>Senin skorun...</h2>
          </div>
          <div className="Results">
            <div className="ScoreArea">
              <span className='ResultsTopic'><img src={topics[selectedTopic]} alt={selectedTopic}
                style={{
                  backgroundColor:
                  selectedTopic === 'HTML' ? '#FFF1E9' :
                                    selectedTopic === 'CSS' ? '#E0FDEF' :
                                    selectedTopic === 'JS' ? '#EBF0FF' :
                                    selectedTopic === 'Accessibility' ? '#F6E7FF' :
                                    '#FFFFFF'
                }}
              /><h4>{selectedTopic}</h4></span>
              <h1>{score}</h1>
              <p> doğru {Questions[selectedTopic].length} soruda</p>
            </div>
            <button className='TryAgain' onClick={handleReset}>Play Again</button>
          </div>
        </div>
      ) : (
        <QuizQuestion
          questions={Questions[selectedTopic]}
          onAnswer={handleAnswer}
          onFinish={handleFinish}
          totalQuestions={Questions[selectedTopic].length}
        />
      )}
    </div>
  );
}

function QuizSelector({ topics, onSelect }) {
  return (
    <div className="quiz-selector">
      <div className="Startcontainer">
        <div className="StartHeader">
          <h4>Welcome to the <br /><h1>Frontend Quiz!</h1></h4>
          <p>Pick a subject to get started.</p>
        </div>
        <div className="categories">
          {topics.map(topic => (
            <button className="categoryItem" key={topic} onClick={() => onSelect(topic)}>
              <span className="category-icon">
                {topic === 'HTML' && <img style={{backgroundColor: '#FFF1E9'}} src={HTML} alt="HTML Icon" />}
                {topic === 'CSS' && <img style={{backgroundColor: '#E0FDEF'}} src={CSS} alt="CSS Icon" />}
                {topic === 'JS' && <img style={{backgroundColor: '#EBF0FF'}} src={JS} alt="JS Icon" />}
                {topic === 'Accessibility' && <img style={{backgroundColor: '#F6E7FF'}} src={Acs} alt="Accessibility Icon" />}
              </span>
              <h3>{topic}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({selectedTopic, setSelectedTopic}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleToggleChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getBackgroundColor = (topic) => {
    switch (topic) {
      case 'HTML':
        return '#FFF1E9';
      case 'CSS':
        return '#E0FDEF';
      case 'JS':
        return '#EBF0FF';
      case 'Accessibility':
        return '#F6E7FF';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div className="header">
      {selectedTopic && (
        <span className='ResultsTopic'>
          <img 
            src={topicImages[selectedTopic]} 
            alt={selectedTopic} 
            style={{ 
              backgroundColor: getBackgroundColor(selectedTopic),
              width: '50px',
              height: '50px',
              borderRadius: '50%'
            }} 
          />
          <h4>{selectedTopic}</h4>
        </span>
      )}
      <img src={sun} alt="Sun Icon" />
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleToggleChange}
        />
        <span className="slider round"></span>
      </label>
      <img src={moon} alt="Moon Icon" />
    </div>
  );
}


function QuizQuestion({ questions, onAnswer, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const question = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (option) => {
    setSelectedOption(option);

    if (option === question.answer) {
      onAnswer(true);
      setCorrectAnswer(option);
    } else {
      onAnswer(false);
      setCorrectAnswer(question.answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      setFeedback(`<img src="${wrong}" alt="Warning"/> Lütfen bir cevap seçin.`);
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setFeedback('');
    } else {
      onFinish();
    }
  };

  const getOptionClass = (index) => {
    switch (index) {
      case 0: return 'option-A';
      case 1: return 'option-B';
      case 2: return 'option-C';
      case 3: return 'option-D';
      case 4: return 'option-E';
      default: return '';
    }
  };

  return (
    <div className="quiz-question">
      <div className="Questions">
        <div className="question-info">
          <p>Soru {currentQuestionIndex + 1} / {questions.length}</p> {/* Soru numarasını ve toplam soru sayısını gösterir */}
        </div>
        <h2 className="question-text">{question.question}</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="Answers">
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`option-button ${getOptionClass(index)} ${selectedOption === option ? (option === question.answer ? 'correct' : 'wrong') : ''}`}
            >
              <span className={`option-letter ${getOptionClass(index)}`}>
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="option-text">{option.replace(/<button[A-E] ><\/button>/g, '')}</span>
            </button>
          ))}
        </div>
        <button className='NextQuestion' onClick={handleNextQuestion}>
          Next Question
        </button>
        {feedback && (
          <div
            className="feedback"
            dangerouslySetInnerHTML={{ __html: feedback }}
          />
        )}
      </div>
    </div>
  );
}