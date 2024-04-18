import navConfig from './navbar'
import customConfig from './my-custom-component'
import LILTICCA from './LilTicca'
import heroSectionConfig from './HeroSection'
export default function myPlugin(editor: any) {

  editor.DomComponents.addType('navbar',navConfig)

  editor.DomComponents.addType('my-custom-component', customConfig);

  editor.DomComponents.addType('hero-section',heroSectionConfig)

  editor.DomComponents.addType('LIL-TICCA',LILTICCA)




  editor.BlockManager.add('LIL-TICCA', {
    label: 'LIL-TICCA',
    category: 'Custom',
    attributes: { class: 'fa fa-cog' }, // Icon for the block
    content: '<div data-gjs-type="LIL-TICCA"></div>',
  });

  editor.BlockManager.add('my-custom-block', {
    label: 'My Custom Component',
    category: 'Custom',
    attributes: { class: 'fa fa-cog' }, // Icon for the block
    content: '<div data-gjs-type="my-custom-component"></div>',
  });


  editor.BlockManager.add('navbar', {
    label: 'Nav Bar',
    category: 'Custom',
    attributes: { class: 'fa fa-cog' }, // Icon for the block
    content: '<div data-gjs-type="navbar"></div>',
  });



}
