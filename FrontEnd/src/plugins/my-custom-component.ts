const myCustomComponent = {
    // Make the editor understand when to bind `my-input-type`
    isComponent: (el: any) => el.tagName === 'div',

    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'div',
        attributes: { class: 'card' },
        draggable: true, // Can be dropped only inside `form` elements
        droppable: true, // Can't drop other elements inside
        components: `
            
          <button  class="btn btn-save">Pre-Save on Spotify</button>
          <button class="btn btn-add">Pre-Add on Apple Music</button>
        `,
        styles: `  .card{
            height: 90vh;
            width: 30vw;
            background-color: #2b89c0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 40px;
            position: absolute;
            flex-direction:column
        
          }
          
          .btn{
            position: relative;
            width: 70%;
            height: 40px;
            border-radius: 5px;
            margin-bottom:10px

        
          }
          
          `,


      }
    }
  }

  export default myCustomComponent