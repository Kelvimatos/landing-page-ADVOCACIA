/**
 * MARCUS SAYEG ADVOCACIA — DIREITO DE FAMÍLIA
 * Centralized Contact Configuration, Brand Intro Sequence,
 * Accessible Navigation, Editorial Reader Sheet & Validated Form
 */

const OFFICIAL_CONTACT = Object.freeze({
  professionalName: 'Marcus Sayeg',
  brandName: 'Marcus Sayeg Advocacia',
  mainArea: 'Direito de Família',
  whatsappNumber: '5511945090941',
  whatsappDisplay: '(11) 94509-0941',
  defaultMessage: 'Olá, Marcus! Gostaria de obter informações sobre o atendimento jurídico.',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
  },
  instagramUrl: 'https://www.instagram.com/marcus.sayeg.adv/',
  email: 'sayegadv@gmail.com',
  get mailtoUrl() {
    return `mailto:${this.email}`;
  }
});

/**
 * Practice Areas Detailed Content (5 Confirmed Areas Only)
 */
const PRACTICE_AREAS_CONTENT = {
  pensao: {
    category: 'ÁREA DE ATUAÇÃO • 01',
    date: 'Direito de Família',
    title: 'Pensão Alimentícia',
    html: `
      <p>
        A obrigação alimentar tem como finalidade assegurar o sustento, a saúde, a educação e o desenvolvimento digno de quem necessita — especialmente filhos menores ou em fase de formação estudantil, bem como ex-cônjuges ou ex-companheiros em hipóteses específicas previstas em lei.
      </p>
      <h3>Fixação, Revisão e Cumprimento da Obrigação</h3>
      <p>
        Na definição do valor da pensão alimentícia, o Direito de Família observa o equilíbrio entre a <strong>necessidade</strong> de quem recebe e a <strong>possibilidade econômica</strong> de quem contribui, respeitando o princípio da proporcionalidade.
      </p>
      <ul>
        <li><strong>Fixação de alimentos:</strong> Estruturação do pedido ou acordo de pensão com base nas despesas comprovadas da rotina familiar e na capacidade financeira das partes.</li>
        <li><strong>Ação revisional ou exoneração:</strong> Como a realidade financeira das famílias pode se alterar ao longo do tempo, o valor fixado pode ser revisto quando houver mudança significativa nas possibilidades do alimentante ou nas necessidades do alimentando.</li>
        <li><strong>Cumprimento de obrigação alimentar:</strong> Acompanhamento técnico para cobrança de valores em atraso ou apresentação de justificativa legal nos procedimentos cabíveis.</li>
      </ul>
      <p>
        Cada situação familiar exige análise individualizada da documentação financeira e da rotina dos filhos para que a orientação jurídica seja clara e adequada à realidade concreta.
      </p>
    `,
    relatedArticles: ['pensao-alimenticia', 'aspectos-juridicos-familiares']
  },
  guarda: {
    category: 'ÁREA DE ATUAÇÃO • 02',
    date: 'Direito de Família',
    title: 'Guarda dos Filhos',
    html: `
      <p>
        A guarda diz respeito à forma como os pais exercem as responsabilidades parentais e tomam decisões importantes sobre a criação, a saúde, a educação e o desenvolvimento dos filhos após o término da conjugalidade ou mesmo quando nunca houve coabitação.
      </p>
      <h3>Modalidades de Guarda e Responsabilidades Parentais</h3>
      <p>
        Toda definição relacionada aos filhos é orientada pelo <strong>princípio do melhor interesse da criança e do adolescente</strong>, buscando preservar sua estabilidade emocional e seu desenvolvimento saudável.
      </p>
      <ul>
        <li><strong>Guarda compartilhada:</strong> Prevê a corresponsabilidade de ambos os genitores nas decisões relevantes da vida dos filhos, independentemente de a criança ter uma residência de referência.</li>
        <li><strong>Guarda unilateral:</strong> Modalidade aplicável em situações específicas nas quais um dos genitores assume com exclusividade a atribuição decisória cotidiana, cabendo ao outro o direito de convivência e o dever de supervisão.</li>
        <li><strong>Modificação de guarda:</strong> Avaliação jurídica quando mudanças na rotina ou nas circunstâncias familiares recomendam a revisão do modelo anteriormente estabelecido.</li>
      </ul>
    `,
    relatedArticles: ['definicao-da-guarda', 'convivencia-familiar']
  },
  convivencia: {
    category: 'ÁREA DE ATUAÇÃO • 03',
    date: 'Direito de Família',
    title: 'Visitas e Convivência Familiar',
    html: `
      <p>
        A convivência familiar é um direito fundamental da criança e do adolescente, essencial para manter vivos os laços de afeto, cuidado e referência com ambos os pais e com a família extensa.
      </p>
      <h3>Organização da Rotina e Previsibilidade</h3>
      <p>
        Mais do que estabelecer horários rígidos, a regulamentação da convivência busca criar uma rotina clara e funcional que evite conflitos recorrentes e respeite a faixa etária e as atividades escolares dos filhos.
      </p>
      <ul>
        <li><strong>Períodos regulares:</strong> Definição clara sobre finais de semana, pernoites e dias da semana, incluindo responsabilidades de busca e entrega escolar.</li>
        <li><strong>Férias e datas comemorativas:</strong> Organização antecipada e alternada para períodos de férias escolares, festas de fim de ano, Dia dos Pais, Dia das Mães e aniversários.</li>
        <li><strong>Adaptação à faixa etária:</strong> Ajustes progressivos na convivência conforme o crescimento da criança e suas necessidades de desenvolvimento.</li>
      </ul>
    `,
    relatedArticles: ['convivencia-familiar', 'definicao-da-guarda']
  },
  divorcio: {
    category: 'ÁREA DE ATUAÇÃO • 04',
    date: 'Direito de Família',
    title: 'Divórcio',
    html: `
      <p>
        O encerramento do casamento envolve decisões jurídicas e patrimoniais que impactam a organização futura da vida de cada cônjuge e da família. Compreender os caminhos disponíveis permite atravessar esse momento com maior serenidade e segurança.
      </p>
      <h3>Caminhos Jurídicos para o Divórcio</h3>
      <p>
        A escolha do procedimento adequado depende da existência de consenso entre o casal e das particularidades familiares e patrimoniais envolvidas:
      </p>
      <ul>
        <li><strong>Divórcio consensual:</strong> Quando há acordo sobre os termos essenciais, permitindo uma condução mais célere e dialogada na via judicial ou em cartório (extrajudicial), observados os requisitos legais.</li>
        <li><strong>Divórcio litigioso:</strong> Quando persistem divergências sobre partilha de bens, alimentos, guarda ou convivência, exigindo representação técnica no âmbito judicial.</li>
        <li><strong>Partilha de bens e efeitos pessoais:</strong> Análise do regime de bens adotado no casamento, levantamento do acervo patrimonial e orientação sobre eventual retomada do nome de solteiro.</li>
      </ul>
    `,
    relatedArticles: ['questoes-no-divorcio', 'casamento-e-uniao-estavel']
  },
  uniao: {
    category: 'ÁREA DE ATUAÇÃO • 05',
    date: 'Direito de Família',
    title: 'União Estável',
    html: `
      <p>
        Configurada pela convivência pública, contínua e duradoura, estabelecida com o objetivo de constituição de família, a união estável produz importantes efeitos pessoais e patrimoniais que muitas vezes passam despercebidos no cotidiano do casal.
      </p>
      <h3>Formalização Preventiva, Reconhecimento e Dissolução</h3>
      <p>
        A orientação jurídica em matéria de união estável abrange tanto o planejamento preventivo quanto a resolução de questões decorrentes do término da relação:
      </p>
      <ul>
        <li><strong>Formalização de união estável:</strong> Elaboração de contrato particular ou assessoria para escritura pública declaratória, permitindo aos companheiros definir com clareza o regime de bens aplicável.</li>
        <li><strong>Reconhecimento e dissolução:</strong> Condução jurídica para comprovar o período de convivência, encerrar formalmente o vínculo e realizar a partilha de bens adquiridos na constância da relação.</li>
        <li><strong>Demais efeitos familiares:</strong> Tratamento conjunto de questões envolvendo filhos comuns, convivência familiar e obrigação alimentar quando cabível.</li>
      </ul>
    `,
    relatedArticles: ['casamento-e-uniao-estavel', 'aspectos-juridicos-familiares']
  }
};

/**
 * Editorial Legal Articles Content (6 Topics)
 */
const ARTICLES_CONTENT = {
  'pensao-alimenticia': {
    category: 'ALIMENTOS',
    date: 'Outubro 2026',
    title: 'Como funciona a pensão alimentícia?',
    html: `
      <p>
        A pensão alimentícia é um dos temas que mais despertam dúvidas no Direito de Família. Seu objetivo central é garantir que filhos — e, em situações específicas, ex-cônjuges ou ex-companheiros — tenham asseguradas as condições materiais necessárias para uma vida digna.
      </p>
      <h3>1. O critério da necessidade e da possibilidade</h3>
      <p>
        Ao contrário do que muitos imaginam, não existe na legislação brasileira uma porcentagem única e automática aplicável a todas as famílias. A definição do valor leva em conta a análise conjunta de dois fatores principais: as necessidades concretas de quem receberá os alimentos e a capacidade econômica real de quem tem o dever de contribuir.
      </p>
      <h3>2. O que está incluído nas despesas alimentares?</h3>
      <p>
        O conceito jurídico de alimentos vai além da alimentação propriamente dita. Ele abrange despesas ordinárias e extraordinárias essenciais ao desenvolvimento dos filhos, tais como moradia, educação, assistência médica e odontológica, vestuário, transporte e atividades formativas compatíveis com o padrão familiar.
      </p>
      <h3>3. É possível revisar o valor definido?</h3>
      <p>
        Sim. Como a vida financeira dos pais e as demandas dos filhos se transformam ao longo dos anos, o valor da pensão alimentícia pode ser objeto de revisão — tanto para majoração quanto para redução — ou de exoneração, sempre mediante comprovação da mudança fática e por meio do procedimento adequado.
      </p>
    `,
    related: ['definicao-da-guarda', 'questoes-no-divorcio']
  },
  'definicao-da-guarda': {
    category: 'FILHOS E CONVIVÊNCIA',
    date: 'Outubro 2026',
    title: 'Quais fatores são considerados na definição da guarda?',
    html: `
      <p>
        Quando os pais deixam de viver juntos, surge a necessidade de organizar como serão exercidas as responsabilidades sobre os filhos. Nesse momento, compreender a distinção entre guarda e regime de convivência é fundamental para tomar decisões conscientes.
      </p>
      <h3>1. O princípio do melhor interesse da criança e do adolescente</h3>
      <p>
        O critério norteador de qualquer definição sobre guarda é a proteção integral e o bem-estar dos filhos. Avaliam-se elementos como a rotina escolar, a disponibilidade de cuidado, a preservação dos vínculos afetivos e o ambiente mais favorável ao desenvolvimento saudável da criança.
      </p>
      <h3>2. Guarda compartilhada e guarda unilateral</h3>
      <p>
        Na <strong>guarda compartilhada</strong>, ambos os pais dividem de forma equilibrada as decisões importantes sobre educação, saúde e formação dos filhos, mesmo que a criança possua uma residência base de referência. Já a <strong>guarda unilateral</strong> atribui a um só dos genitores a responsabilidade decisória cotidiana, mantendo-se ao outro o direito de convivência e o dever de acompanhamento.
      </p>
      <h3>3. Diálogo e previsibilidade</h3>
      <p>
        Sempre que possível, a construção de um entendimento claro sobre as atribuições de cada genitor contribui para reduzir tensões e proporcionar segurança emocional aos filhos durante e após a reorganização familiar.
      </p>
    `,
    related: ['convivencia-familiar', 'pensao-alimenticia']
  },
  'casamento-e-uniao-estavel': {
    category: 'CASAMENTO E UNIÃO ESTÁVEL',
    date: 'Outubro 2026',
    title: 'Qual é a diferença entre casamento e união estável?',
    html: `
      <p>
        Tanto o casamento civil quanto a união estável são formas legítimas de constituição de família reconhecidas pela legislação brasileira. No entanto, existem diferenças importantes quanto ao modo como cada vínculo se inicia, se comprova e se encerra.
      </p>
      <h3>1. Formação do vínculo: solenidade versus situação de fato</h3>
      <p>
        O <strong>casamento</strong> é um ato formal e solene, celebrado perante o Registro Civil após processo de habilitação, alterando imediatamente o estado civil dos cônjuges. A <strong>união estável</strong>, por sua vez, nasce da realidade fática: caracteriza-se pela convivência pública, contínua e duradoura, estabelecida com o objetivo de constituir família, ainda que o casal não tenha assinado um documento prévio.
      </p>
      <h3>2. Regime de bens e efeitos patrimoniais</h3>
      <p>
        Na ausência de contrato escrito ou pacto antenupcial estipulando regime diverso, aplica-se como regra geral o regime da comunhão parcial de bens. Por isso, a formalização da união estável por escritura pública ou contrato particular é recomendável quando o casal deseja estabelecer regras patrimoniais específicas e comprovar a data de início da convivência.
      </p>
      <h3>3. Encerramento e segurança jurídica</h3>
      <p>
        Enquanto o casamento se encerra formalmente pelo divórcio, a união estável pode exigir o reconhecimento e a dissolução formal para regularizar a partilha de bens e assegurar clareza jurídica a ambos os companheiros.
      </p>
    `,
    related: ['questoes-no-divorcio', 'aspectos-juridicos-familiares']
  },
  'questoes-no-divorcio': {
    category: 'CASAMENTO E UNIÃO ESTÁVEL',
    date: 'Outubro 2026',
    title: 'Quais questões podem ser tratadas em um divórcio?',
    html: `
      <p>
        O divórcio não se resume ao desligamento formal do vínculo matrimonial. Ele representa o momento oportuno para organizar, com segurança jurídica, diversos efeitos patrimoniais e familiares decorrentes da vida em comum.
      </p>
      <h3>1. Partilha de bens e direitos</h3>
      <p>
        Conforme o regime de bens adotado no casamento, procede-se ao levantamento do patrimônio e de eventuais obrigações contraídas pelo casal para definir a divisão adequada de imóveis, veículos, investimentos, quotas empresariais e demais ativos.
      </p>
      <h3>2. Filhos: guarda, convivência e pensão alimentícia</h3>
      <p>
        Quando o casal possui filhos menores ou dependentes, podem ser estruturados — em conjunto ou em demandas correlatas — os termos relativos à modalidade de guarda, ao regime de convivência familiar e à contribuição alimentar de cada genitor.
      </p>
      <h3>3. Nome de casado e alimentos entre ex-cônjuges</h3>
      <p>
        No divórcio também é tratada a opção pela manutenção ou retorno ao nome de solteiro, bem como a análise de eventual necessidade de alimentos transitórios ou compensatórios entre os cônjuges, conforme as particularidades do caso.
      </p>
    `,
    related: ['casamento-e-uniao-estavel', 'pensao-alimenticia']
  },
  'convivencia-familiar': {
    category: 'FILHOS E CONVIVÊNCIA',
    date: 'Outubro 2026',
    title: 'Como funciona a convivência familiar?',
    html: `
      <p>
        A convivência familiar garante que crianças e adolescentes mantenham contato contínuo e construtivo com ambos os pais após a separação, fortalecendo seus referenciais afetivos e familiares.
      </p>
      <h3>1. Superando a ideia restrita de "visitas"</h3>
      <p>
        A visão contemporânea do Direito de Família valoriza a participação efetiva na rotina da criança — acompanhando tarefas escolares, consultas médicas e momentos de lazer — em vez de limitar o contato a breves visitas esporádicas.
      </p>
      <h3>2. Elementos de um plano de convivência claro</h3>
      <p>
        Para evitar dúvidas e desencontros no dia a dia, a regulamentação da convivência costuma especificar:
      </p>
      <ul>
        <li>Dias da semana e finais de semana alternados, com horários e locais de retirada e devolução;</li>
        <li>Divisão equilibrada das férias escolares de meio e fim de ano;</li>
        <li>Alternância em feriados prolongados, festas natalinas, Ano-Novo e aniversários;</li>
        <li>Regras claras para viagens nacionais ou internacionais na companhia de um dos genitores.</li>
      </ul>
      <h3>3. Flexibilidade e respeito à rotina da criança</h3>
      <p>
        Um regime bem estruturado combina previsibilidade com bom senso, respeitando sempre os horários de descanso, os compromissos escolares e a idade dos filhos.
      </p>
    `,
    related: ['definicao-da-guarda', 'aspectos-juridicos-familiares']
  },
  'aspectos-juridicos-familiares': {
    category: 'DIREITO DE FAMÍLIA',
    date: 'Outubro 2026',
    title: 'Quais aspectos jurídicos devem ser considerados em questões familiares?',
    html: `
      <p>
        Decisões tomadas no âmbito familiar costumam produzir efeitos duradouros na vida pessoal, emocional e patrimonial dos envolvidos. Contar com informação jurídica clara antes de firmar acordos informais ou tomar medidas precipitadas é uma cautela essencial.
      </p>
      <h3>1. A importância da orientação preventiva</h3>
      <p>
        Compreender previamente os direitos e deveres aplicáveis à sua situação permite avaliar com maturidade a viabilidade de soluções consensuais e evitar desgastes desnecessários para a família.
      </p>
      <h3>2. Organização documental</h3>
      <p>
        Seja em demandas de alimentos, guarda, divórcio ou união estável, a reunião organizada de certidões, comprovantes de despesas dos filhos e documentos patrimoniais facilita a compreensão técnica do caso e confere maior transparência às tratativas.
      </p>
      <h3>3. Prioridade à proteção dos filhos e ao diálogo ético</h3>
      <p>
        Em todas as etapas, a condução jurídica responsável busca preservar os filhos de conflitos adultos e encontrar caminhos juridicamente seguros, pautados pelo sigilo e pela ética profissional.
      </p>
    `,
    related: ['pensao-alimenticia', 'casamento-e-uniao-estavel']
  }
};

const PRIVACY_POLICY_CONTENT = {
  category: 'AVISO INSTITUCIONAL & PRIVACIDADE',
  date: 'Marcus Sayeg Advocacia',
  title: 'Política de Privacidade e Termos Informativos',
  html: `
    <p>
      Este site pertence a <strong>Marcus Sayeg Advocacia</strong> e possui finalidade estritamente institucional e informativa, em observância às normas éticas da Ordem dos Advogados do Brasil (Código de Ética e Disciplina da OAB e Provimento nº 205/2021).
    </p>
    <h3>1. Caráter Informativo do Conteúdo</h3>
    <p>
      Os artigos e explicações disponibilizados neste portal têm o objetivo de esclarecer conceitos gerais de Direito de Família. Nenhuma informação publicada neste site constitui parecer jurídico formal, promessa de resultado ou substitui a análise individualizada de um advogado sobre o caso concreto.
    </p>
    <h3>2. Tratamento de Dados de Contato</h3>
    <p>
      Os dados básicos fornecidos voluntariamente pelo visitante no formulário de contato (nome, telefone ou e-mail, assunto geral e mensagem opcional) têm como única finalidade viabilizar o retorno ou o encaminhamento direto da solicitação pelos canais oficiais do escritório: WhatsApp <strong>(11) 94509-0941</strong> ou e-mail <strong>sayegadv@gmail.com</strong>.
    </p>
    <h3>3. Recomendação de Segurança no Contato Inicial</h3>
    <p>
      Para sua proteção e privacidade, recomendamos que não sejam enviados documentos confidenciais, senhas ou relatos íntimos detalhados antes da realização do atendimento inicial e da confirmação formal com o profissional.
    </p>
  `,
  related: []
};

// Determine whether the intro should play:
// Runs on initial entry to the home page AND on full page reloads.
// Does NOT re-trigger during internal anchor navigation.
const navEntry = window.performance && window.performance.getEntriesByType ? window.performance.getEntriesByType('navigation')[0] : null;
const isReload = navEntry ? navEntry.type === 'reload' : Boolean(window.performance && window.performance.navigation && window.performance.navigation.type === 1);
const hasDeepHash = Boolean(window.location.hash && window.location.hash !== '#inicio');

let shouldPlayIntro = true;
try {
  if (isReload) {
    // A complete page reload was requested: execute the cinematic intro
    shouldPlayIntro = !hasDeepHash;
  } else if (hasDeepHash) {
    // Visitor accessed a specific internal section directly via deep link
    shouldPlayIntro = false;
  } else if (sessionStorage.getItem('ms_intro_completed') === '1' && !isReload) {
    // Internal session navigation without reload
    shouldPlayIntro = false;
  }
} catch (_) {
  // If sessionStorage is restricted, fallback to playing on load
  shouldPlayIntro = !hasDeepHash;
}

if (!shouldPlayIntro) {
  document.documentElement.classList.add('intro-seen');
}

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const brandIntro = document.getElementById('brand-intro');

  // Dismiss intro cleanly after 1.35s and ensure zero scroll lock or delay
  if (brandIntro) {
    if (prefersReducedMotion || !shouldPlayIntro || document.documentElement.classList.contains('intro-seen')) {
      brandIntro.classList.add('is-dismissed');
      document.body.classList.remove('intro-active');
    } else {
      document.body.classList.add('intro-active');

      let introDismissed = false;
      const dismissIntro = () => {
        if (introDismissed) return;
        introDismissed = true;
        brandIntro.classList.add('is-dismissed');
        document.body.classList.remove('intro-active');
        document.documentElement.classList.add('intro-seen');
        try {
          sessionStorage.setItem('ms_intro_completed', '1');
        } catch (_) {}
      };

      const dismissTimer = setTimeout(dismissIntro, 1350);

      // Listen for CSS animation completion as redundant safety guarantee
      brandIntro.addEventListener('animationend', () => {
        clearTimeout(dismissTimer);
        dismissIntro();
      }, { once: true });
    }
  }

  if (!prefersReducedMotion) {
    document.documentElement.classList.add('js-enabled');
  }

  // Update footer year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Synchronize all Official Contact Links from Centralized Config
  document.querySelectorAll('[data-contact-whatsapp]').forEach(el => {
    el.setAttribute('href', OFFICIAL_CONTACT.whatsappUrl);
  });
  document.querySelectorAll('[data-contact-instagram]').forEach(el => {
    el.setAttribute('href', OFFICIAL_CONTACT.instagramUrl);
  });
  document.querySelectorAll('[data-contact-email]').forEach(el => {
    el.setAttribute('href', OFFICIAL_CONTACT.mailtoUrl);
  });

  // Elements
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.header-nav .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  // 1. Sticky Header on Scroll
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Accessible Mobile Navigation Drawer
  let isMobileMenuOpen = false;

  function openMobileDrawer() {
    if (!mobileDrawer || !mobileToggle) return;
    isMobileMenuOpen = true;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.classList.add('is-active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileToggle.setAttribute('aria-label', 'Fechar menu de navegação');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer(returnFocus = false) {
    if (!mobileDrawer || !mobileToggle || !isMobileMenuOpen) return;
    isMobileMenuOpen = false;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.classList.remove('is-active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    document.body.style.overflow = '';
    if (returnFocus) {
      mobileToggle.focus();
    }
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      if (isMobileMenuOpen) {
        closeMobileDrawer(true);
      } else {
        openMobileDrawer();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer(false);
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        closeMobileDrawer(false);
      }
    });
  }

  // 3. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.hasAttribute('data-area-modal')) return;
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 74;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // 4. Scroll Spy for Active Navigation Link
  const updateActiveNavOnScroll = () => {
    let currentSectionId = 'inicio';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const mappedNavId = currentSectionId === 'metodologia' ? 'atuacao' : currentSectionId;

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${mappedNavId}`);
    });
    mobileLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${ mappedNavId}`);
    });
  };
  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();

  // 5. IntersectionObserver for Subtle Editorial Scroll Reveal
  const revealItems = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealItems.forEach(el => revealObserver.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('is-revealed'));
  }

  // 6. Category Filter for Legal Journal Entries
  const filterTabs = document.querySelectorAll('.filter-tab');
  const journalEntries = document.querySelectorAll('.journal-entry');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedFilter = tab.getAttribute('data-filter');

      filterTabs.forEach(t => {
        const isCurrent = t === tab;
        t.classList.toggle('is-active', isCurrent);
        t.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      journalEntries.forEach(entry => {
        const category = entry.getAttribute('data-category');
        if (selectedFilter === 'all' || category === selectedFilter) {
          entry.removeAttribute('hidden');
        } else {
          entry.setAttribute('hidden', '');
        }
      });
    });
  });

  // 7. Accessible Reader Sheet (Practice Areas, Articles & Privacy Policy)
  const modalBackdrop = document.getElementById('editorial-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalDate = document.getElementById('modal-date');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalRelatedWrapper = document.getElementById('modal-related-wrapper');
  const modalRelatedList = document.getElementById('modal-related-list');
  let lastFocusedTrigger = null;

  function openReaderModal({ category, date, title, html, relatedIds = [] }, triggerEl = null) {
    if (!modalBackdrop) return;
    if (triggerEl) {
      lastFocusedTrigger = triggerEl;
    }

    modalCategory.textContent = category;
    modalDate.textContent = date;
    modalTitle.textContent = title;
    modalContent.innerHTML = html;

    if (relatedIds && Array.isArray(relatedIds) && relatedIds.length > 0) {
      modalRelatedList.replaceChildren();
      relatedIds.forEach(relId => {
        if (typeof relId === 'string' && Object.prototype.hasOwnProperty.call(ARTICLES_CONTENT, relId)) {
          const relArticle = ARTICLES_CONTENT[relId];
          if (relArticle) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'related-item-btn';
            btn.textContent = relArticle.title;
            btn.addEventListener('click', () => {
              openArticleById(relId, null);
              const modalBody = modalBackdrop.querySelector('.editorial-modal-body');
              if (modalBody) modalBody.scrollTop = 0;
            });
            modalRelatedList.appendChild(btn);
          }
        }
      });
      modalRelatedWrapper.removeAttribute('hidden');
    } else {
      modalRelatedList.replaceChildren();
      modalRelatedWrapper.setAttribute('hidden', '');
    }

    modalBackdrop.removeAttribute('hidden');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeReaderModal() {
    if (!modalBackdrop || modalBackdrop.hasAttribute('hidden')) return;
    modalBackdrop.setAttribute('hidden', '');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
      lastFocusedTrigger = null;
    }
  }

  function openArticleById(articleId, triggerEl) {
    if (!articleId || typeof articleId !== 'string') return;
    if (!Object.prototype.hasOwnProperty.call(ARTICLES_CONTENT, articleId)) return;
    const data = ARTICLES_CONTENT[articleId];
    if (!data) return;
    openReaderModal({
      category: data.category,
      date: data.date,
      title: data.title,
      html: data.html,
      relatedIds: data.related
    }, triggerEl);
  }

  function openAreaById(areaId, triggerEl) {
    if (!areaId || typeof areaId !== 'string') return;
    if (!Object.prototype.hasOwnProperty.call(PRACTICE_AREAS_CONTENT, areaId)) return;
    const data = PRACTICE_AREAS_CONTENT[areaId];
    if (!data) return;
    openReaderModal({
      category: data.category,
      date: data.date,
      title: data.title,
      html: data.html,
      relatedIds: data.relatedArticles
    }, triggerEl);
  }

  document.querySelectorAll('[data-area-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const areaId = btn.getAttribute('data-area-modal');
      openAreaById(areaId, btn);
    });
  });

  document.querySelectorAll('[data-article-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-article-id');
      openArticleById(articleId, btn);
    });
  });

  const privacyBtn = document.getElementById('open-privacy-modal');
  if (privacyBtn) {
    privacyBtn.addEventListener('click', () => {
      openReaderModal({
        category: PRIVACY_POLICY_CONTENT.category,
        date: PRIVACY_POLICY_CONTENT.date,
        title: PRIVACY_POLICY_CONTENT.title,
        html: PRIVACY_POLICY_CONTENT.html,
        relatedIds: []
      }, privacyBtn);
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeReaderModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeReaderModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalBackdrop && !modalBackdrop.hasAttribute('hidden')) {
        closeReaderModal();
      } else if (isMobileMenuOpen) {
        closeMobileDrawer(true);
      }
    }
  });

  // 8. Contact Form Validation & Transparent Channel Forwarding
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('form-feedback');
  let lastSubmitTimestamp = 0;

  function setFieldError(inputEl, errorEl, message) {
    if (!inputEl || !errorEl) return;
    if (message) {
      inputEl.classList.add('has-error');
      inputEl.setAttribute('aria-invalid', 'true');
      errorEl.textContent = message;
      errorEl.removeAttribute('hidden');
    } else {
      inputEl.classList.remove('has-error');
      inputEl.removeAttribute('aria-invalid');
      errorEl.textContent = '';
      errorEl.setAttribute('hidden', '');
    }
  }

  function isValidEmailOrPhone(value) {
    const trimmed = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digitsOnly = trimmed.replace(/\D/g, '');
    return emailRegex.test(trimmed) || (digitsOnly.length >= 10 && digitsOnly.length <= 15);
  }

  if (contactForm) {
    const nomeInput = document.getElementById('nome');
    const contatoInput = document.getElementById('contato_retorno') || document.getElementById('contato');
    const assuntoSelect = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');
    const honeypotInput = document.getElementById('website_url');

    const nomeError = document.getElementById('nome-error');
    const contatoError = document.getElementById('contato-error');
    const assuntoError = document.getElementById('assunto-error');

    [
      [nomeInput, nomeError],
      [contatoInput, contatoError],
      [assuntoSelect, assuntoError]
    ].forEach(([input, err]) => {
      if (input) {
        input.addEventListener('input', () => setFieldError(input, err, ''));
        input.addEventListener('change', () => setFieldError(input, err, ''));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (honeypotInput && honeypotInput.value.trim() !== '') {
        return;
      }

      const now = Date.now();
      if (now - lastSubmitTimestamp < 3000) {
        return;
      }

      let isValid = true;
      // Sanitize inputs to prevent CRLF injection and URL length overflow
      const sanitizeSingleLine = (val, max = 100) => String(val || '').replace(/[\r\n\t]/g, ' ').trim().slice(0, max);
      const sanitizeMultiLine = (val, max = 1500) => String(val || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim().slice(0, max);

      const nomeVal = sanitizeSingleLine(nomeInput ? nomeInput.value : '', 100);
      const contatoVal = sanitizeSingleLine(contatoInput ? contatoInput.value : '', 120);
      const assuntoVal = sanitizeSingleLine(assuntoSelect ? assuntoSelect.value : '', 80);
      const mensagemVal = sanitizeMultiLine(mensagemInput ? mensagemInput.value : '', 1500);

      if (nomeVal.length < 2) {
        setFieldError(nomeInput, nomeError, 'Por favor, informe seu nome.');
        isValid = false;
      } else {
        setFieldError(nomeInput, nomeError, '');
      }

      if (!isValidEmailOrPhone(contatoVal)) {
        setFieldError(contatoInput, contatoError, 'Informe um e-mail válido ou telefone com DDD.');
        isValid = false;
      } else {
        setFieldError(contatoInput, contatoError, '');
      }

      if (!assuntoVal) {
        setFieldError(assuntoSelect, assuntoError, 'Selecione o assunto geral do seu contato.');
        isValid = false;
      } else {
        setFieldError(assuntoSelect, assuntoError, '');
      }

      if (!isValid) {
        const firstInvalid = contactForm.querySelector('.has-error');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      lastSubmitTimestamp = now;

      const selectedChannelInput = contactForm.querySelector('input[name="canal_envio"]:checked');
      const selectedChannel = selectedChannelInput ? selectedChannelInput.value : 'whatsapp';

      if (selectedChannel === 'email') {
        const subject = `Solicitação de Contato — ${assuntoVal} | ${OFFICIAL_CONTACT.brandName}`;
        const bodyLines = [
          'Olá, Marcus!',
          '',
          'Gostaria de obter informações sobre o atendimento jurídico.',
          '',
          `• Nome: ${nomeVal}`,
          `• Contato de retorno: ${contatoVal}`,
          `• Assunto geral: ${assuntoVal}`
        ];
        if (mensagemVal) {
          bodyLines.push(`• Mensagem: ${mensagemVal}`);
        }
        const mailtoHref = `mailto:${OFFICIAL_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailtoHref;

        if (formFeedback) {
          formFeedback.textContent = `Seu aplicativo de e-mail foi aberto com os dados preenchidos para envio a ${OFFICIAL_CONTACT.email}.`;
          formFeedback.removeAttribute('hidden');
        }
      } else {
        const textLines = [
          `Olá, Marcus! Gostaria de obter informações sobre o atendimento jurídico.`,
          ``,
          `*Nome:* ${nomeVal}`,
          `*Contato:* ${contatoVal}`,
          `*Assunto:* ${assuntoVal}`
        ];
        if (mensagemVal) {
          textLines.push(`*Mensagem:* ${mensagemVal}`);
        }
        const whatsappHref = `https://wa.me/${OFFICIAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(textLines.join('\n'))}`;
        window.open(whatsappHref, '_blank', 'noopener,noreferrer');

        if (formFeedback) {
          formFeedback.textContent = `O WhatsApp oficial ${OFFICIAL_CONTACT.whatsappDisplay} foi aberto em uma nova guia com sua mensagem pronta para envio.`;
          formFeedback.removeAttribute('hidden');
        }
      }
    });
  }
});
