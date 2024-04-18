const navConfig = {
    isComponent: (el: any) => el.tagName === 'div',

    model: {
        // Default properties
        defaults: {
            tagName: 'div',
            attributes: { class: 'root' },

            draggable: true, // Can be dropped only inside `form` elements
            droppable: true, // Can't drop other elements inside
            components: `
          
        <div class="root">
        <div class="header">
          <img class="imgOne"
                src="https://presave.umusic.com/liltecca-500lbs/static/cf79ee885ddb214e21f49aebca90944c/2cd9a/573a5599-abde-4a11-94d9-21936eaca2d9.webp"
                alt="">
            <img class="imgTwo"
                src="https://presave.umusic.com/liltecca-500lbs/static/3118aaf3a92dfdf3517d98cd1299df59/2cd9a/f96c322c-d02f-4301-9465-b574d3339484.webp"
                alt="">

              <div class="buton-div">
                 <div> 
                 <button class="button" data-gjs-type="text" data-gjs-editable><div>Pre-Save on Spotify</div></button><br>
                 <input class="checkbox" type="checkbox" name="" id="">
                    <p class="para">
                        SIGN UP FOR UPDATES FROM LIL TECCA</p>

               </div>
                <div>
                <button class="button" data-gjs-type="text" data-gjs-editable>Pre-ADD on Apple Music</button><br>
                <input class="checkbox" type="checkbox" name="" id="">
                    <p class="para">
                        SIGN UP FOR UPDATES FROM LIL TECCA</p>


                </div> 
            </div>
        </div>
        <div class="footer"></div>
    </div>
      `,
            styles: ` 
   
    
        .root {
            background-color: rgb(10, 10, 10);
            height: 100vh;
            width: 100vw;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }
        
      
        
        .header {
            width: 60vw;
            background-color: rgb(10, 10, 10);
            height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1em;
            min-width: fit-content;
        }
        
        .imgOne {
            height: 4em;
            width: 35em;
            margin-top: 4em;
        }
        
        .imgTwo {
            height: 17em;
            width: 38em;
            margin-top: 4em;
        
        }
        
        .button {
            border: 1px solid red;
            color: red;
            background-color: rgb(10, 10, 10);
            width: 23em;
            height: 3em;
            margin-top: 2em;
        }
        
        .checkbox {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 10px;
          height: 10px;
          border: 1px solid red;
          background-color: rgb(10, 10, 10);
          outline: none;
          cursor: pointer;
          vertical-align: middle; 
          margin-right: 5px;
          margin-left: 4em;
        
        }
        
        .checkbox:checked {
          background-color: red; 
        }
        
        
        p{
            color: red;
        }
        
        .buton-div {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width:40vw;
            margin-top: 3em;
        }
        
        .span {
            margin-top: 50px;
        }
        
        .para {
            font-size: 10px;
            display: inline;
        }
        
        @media screen and (max-width: 600px) {
            .buton-div {
                display: flex;
                flex-direction: column;
                min-width: fit-content
            }
        }
        
        
        `,


        }
    }

}

export default navConfig;

