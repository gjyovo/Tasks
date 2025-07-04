// 导航结构
function createNavigation() {
  // 导航容器
  const nav = document.createElement('nav');
  nav.id = 'mainNav';
  
  // 菜单按钮
  const NavBotton = document.createElement('button');
  NavBotton.className = 'navButton';
  
  // 创建导航列表
  const ul = document.createElement('ul');
  ul.className = 'nav-list';
  
  // 导航文字
  const navItems = [
    { text: '首页', href: '/' },
    { text: '简介', href: '/about' },
    { text: '产品', href: '/products' },
    { text: '联系我们', href: '/contact' }
  ];

  // 生成导航项
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    
    // 高亮当前页面
    if (a.href === window.location.href) {
      a.classList.add('active');
    }
    
    li.appendChild(a);
    ul.appendChild(li);
  });

 // 组合元素
  nav.appendChild(NavBotton);
  nav.appendChild(ul);
  document.body.prepend(nav);

  // 添加样式
  addNavigationStyles();
  
  // 添加事件监听
  setupEventListeners();
}

// 添加导航样式
function addNavigationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #mainNav {
      background: rgba(143, 214, 255, 0.69);
      padding: 1rem;
      position: fixed;
      width: 100%;
      top: 0;
      z-index:100;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: transform 0.3s ease;
    }

    .nav-list li {
      margin: 0 15px;
    }

    .nav-list a {
      color: white;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 4px;
      transition: background 0.3s;
    }

    .nav-list a:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-list a.active {
      background:rgb(16, 37, 59);
    }

    .navButton {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }

      .nav-list.show {
        transform: translateY(0);
      }

      .nav-list li {
        margin: 10px 0;
      }

      .navButton {
        display: block;
      }
    }
  `;
  document.head.appendChild(style);
}

// 事件处理
function setupEventListeners() {
  const navButton = document.querySelector('.navButton');
  const navList = document.querySelector('.nav-list');
  
  // 菜单点击
  navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

}

// 初始化导航
document.addEventListener('DOMContentLoaded', createNavigation);




