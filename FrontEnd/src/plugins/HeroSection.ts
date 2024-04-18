const heroSectionConfig = {
    isComponent: (el: any) => el.tagName === 'nav',

    model: {
      // Default properties
      defaults: {
        tagName: 'nav',
        attributes: { class: 'nav' },

        draggable: true, // Can be dropped only inside `form` elements
        droppable: true, // Can't drop other elements inside
        components: `
          
        <div class="logo">Logo</div>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
      `,
        styles: ` 
        .nav {
          background-color: #333;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }
        
        .logo {
          font-size: 24px;
        }
        
        .menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        
        .menu li {
          margin-left: 20px;
        }
        
        .menu li a {
          color: #fff;
          text-decoration: none;
        }
        
        .menu-icon {
          display: none;
        }
        
        @media (max-width: 768px) {
          .menu {
            display: none;
            flex-direction: column;
            background-color: #333;
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            z-index: 1;
          }
        
          .menu li {
            margin: 0;
            text-align: center;
          }
        
          .menu-icon {
            display: block;
            cursor: pointer;
          }
        
          #menu-toggle:checked + .menu {
            display: flex;
          }
        }
        
        
        `,


      }
    }
}

export default heroSectionConfig;