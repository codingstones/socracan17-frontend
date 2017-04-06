import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/foundation/Home';
import Reveal from '@/components/foundation/Reveal';
import Slider from '@/components/foundation/Slider';
import Tooltip from '@/components/foundation/Tooltip';
import DropdownMenu from '@/components/foundation/DropdownMenu';
import DrilldownMenu from '@/components/foundation/DrilldownMenu';
import AccordionMenu from '@/components/foundation/AccordionMenu';
import Magellan from '@/components/foundation/Magellan';
import Accordion from '@/components/foundation/Accordion';
import Dropdown from '@/components/foundation/Dropdown';
import Tabs from '@/components/foundation/Tabs';
import Orbit from '@/components/foundation/Orbit';
import Sessions from '@/pages/Sessions';
import Session from '@/pages/Session';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: Sessions },
    { name: 'new-session', path: '/sessions/new', component: Session },
    { name: 'sessions', path: '/sessions', component: Sessions },

    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'slider', path: '/slider', component: Slider },
    { name: 'tooltip', path: '/tooltip', component: Tooltip },
    { name: 'dropdown-menu', path: '/dropdown-menu', component: DropdownMenu },
    { name: 'drilldown-menu', path: '/drilldown-menu', component: DrilldownMenu },
    { name: 'accordion-menu', path: '/accordion-menu', component: AccordionMenu },
    { name: 'magellan', path: '/magellan', component: Magellan },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'tabs', path: '/tabs', component: Tabs },
    { name: 'orbit', path: '/orbit', component: Orbit },
  ],
});
