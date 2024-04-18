
import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import grapesjs from "grapesjs";
import 'grapesjs/dist/css/grapes.min.css'
import websitePlugin from 'grapesjs-preset-webpage';
import basicBlockPlugin from 'grapesjs-blocks-basic'
import formPlugin from 'grapesjs-plugin-forms'
import myPlugin from './plugins/firstCustomPlugin'
import './components/compOne.css'



function App() {

  const [editor, setEditor] = useState<any>(null)

  const [projectDetail, setProjectDetail] = useState<any>([]);

  const [selected, setSelected] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/getarray")
      console.log(response.data);
      setProjectDetail([...response.data])

    })()

    const editor = grapesjs.init({
      container: '#gjs',
      width: '100%',
      // styleManager:{},
      plugins: [websitePlugin, basicBlockPlugin, formPlugin],

      pluginsOpts: {
        'grapesjs-plugin-forms': {
          blocksBasicOpts: {
            // Add more options if needed
          }
        }
      }
    })

    myPlugin(editor);
    setEditor(editor);

    editor.on('component:add', (component) => {
      const cmp = component.getEl();
      // Check if the added component is a button
      if (cmp.tagName === 'BUTTON') {
        // Add event listener to the button
        cmp.addEventListener('click', handleButtonClick);
      }
    });


  }, []);


  async function saveCurrentProject() {

    const html = editor.getHtml();
    const css = editor.getCss();
    const projectName = prompt("Project name ?");

    const response = await axios.post("http://localhost:3000/", { HTML: html, CSS: css, NAME: projectName })

    if (response) {
      console.log(response.data);

    }
    // localStorage.setItem('currentProject', JSON.stringify({ 'HTML': html, 'CSS': css }))

  }

  async function loadCurrentProject() {

    // const projectData = JSON.parse(localStorage.getItem('currentProject') || '{}');

    const filteredProduct = projectDetail.filter((item: any) => item.NAME == selected)
    console.log(selected);

    console.log(filteredProduct);


    const response = await axios.get(`http://localhost:3000?id=${filteredProduct[0]._id}`)

    const HTML = response.data[0].HTML;
    const CSS = response.data[0].CSS

    console.log(response.data[0].HTML);


    // const { HTML, CSS }: any = projectData
    editor.setComponents(HTML);
    editor.setStyle(CSS);

  }

  function currentValue(e: any) {
    setSelected(e.target.value)
  }

  const handleButtonClick = (event: any) => {
    console.log('Button clicked:', event.target);
    // Add your custom logic here
  };
  return (
    <>

      <div style={{textAlign:"right"}}>
        <select name="cars" id="cars" onChange={currentValue}>
          {projectDetail.map((item: any) => { return <option value={item.id}>{item.NAME}</option> })}
        </select>
        <button onClick={saveCurrentProject} className="saveButton">Save</button>
        <button onClick={loadCurrentProject} className="saveButton">Load</button>
      </div>

      <div id="gjs">

      </div>
    </>
  );
}

export default App;

