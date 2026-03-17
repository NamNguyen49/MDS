import React, { useState, useEffect } from 'react';
import Button from './lib/m3/Button';
import TextField from './lib/m3/TextField';
import Card from './lib/m3/Card';
import Switch from './lib/m3/Switch';
import Checkbox from './lib/m3/Checkbox';
import Dialog from './lib/m3/Dialog';
import IconButton from './lib/m3/IconButton';
import FAB from './lib/m3/FAB';
import Chip from './lib/m3/Chip';
import Badge from './lib/m3/Badge';
import ProgressBar from './lib/m3/ProgressBar';
import Slider from './lib/m3/Slider';
import Divider from './lib/m3/Divider';
import { List, ListItem } from './lib/m3/List';
import Tabs from './lib/m3/Tabs';
import SegmentedButton from './lib/m3/SegmentedButton';
import Snackbar from './lib/m3/Snackbar';
import NavigationBar from './lib/m3/NavigationBar';
import SearchBar from './lib/m3/SearchBar';
import Tooltip from './lib/m3/Tooltip';
import { Showcase } from './components/ui/Showcase';
import TopAppBar from './lib/m3/TopAppBar';
import NavigationDrawer from './lib/m3/NavigationDrawer';
import NavigationRail from './lib/m3/NavigationRail';
import BottomSheet from './lib/m3/BottomSheet';
import Menu from './lib/m3/Menu';
import Alert from './lib/m3/Alert';
import Pagination from './lib/m3/Pagination';
import Carousel from './lib/m3/Carousel';
import SideSheet from './lib/m3/SideSheet';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('light');
  const [switchState, setSwitchState] = useState(true);
  const [checkState, setCheckState] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState('one');
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [activeTabId, setActiveTabId] = useState('tab1');
  const [selectedSegment, setSelectedSegment] = useState('day');
  const [snackOpen, setSnackOpen] = useState(false);
  const [navActiveId, setNavActiveId] = useState('home');
  const [searchText, setSearchText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [railActiveId, setRailActiveId] = useState('buttons');
  const [drawerActiveId, setDrawerActiveId] = useState('buttons');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => setProgress(o => (o >= 100 ? 0 : o + 1)), 100);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { type: 'header', label: 'Main' },
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { type: 'header', label: 'Styles' },
    { id: 'semantic', label: 'Semantic Colors', icon: 'palette' },
    { id: 'typography', label: 'Typography', icon: 'text_fields' },
    { id: 'media', label: 'Images & Media', icon: 'image' },
    { type: 'header', label: 'Components' },
    { id: 'buttons', label: 'Buttons & FAB', icon: 'smart_button' },
    { id: 'textfields', label: 'Inputs & Search', icon: 'edit_square' },
    { id: 'selection', label: 'Selection', icon: 'check_box' },
    { id: 'navigation', label: 'Navigation', icon: 'navigation' },
    { id: 'chips', label: 'Chips & Badges', icon: 'label' },
    { id: 'cards', label: 'Cards & Lists', icon: 'view_agenda' },
    { id: 'alerts', label: 'Alerts & Banners', icon: 'warning' },
    { id: 'pagination', label: 'Pagination', icon: 'last_page' },
    { id: 'feedback', label: 'Feedback', icon: 'sync' },
    { id: 'dialogs', label: 'Dialogs & Snack', icon: 'chat_bubble' },
  ];

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div className="app-layout">
      <NavigationDrawer 
        header={
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <span className="material-symbols-rounded" style={{ color: 'var(--md-sys-color-primary)', fontSize: '32px' }}>library_books</span>
            <h1 style={{ fontSize: '20px', color: 'var(--md-sys-color-on-surface)' }}>MDS</h1>
          </div>
        }
        items={menuItems}
        activeId={activeTab}
        onChange={setActiveTab}
      />

      <div className="main-content-wrapper">
        <TopAppBar 
          title="Component Showcase" 
          leadingIcon="menu" 
          trailingIcons={[
            { icon: theme === 'light' ? 'dark_mode' : 'light_mode', onClick: toggleTheme },
            <Menu 
              trigger={<IconButton icon="more_vert" />} 
              items={[
                { label: 'Profile', leadingIcon: 'person', onClick: () => alert('View Profile') },
                { label: 'Settings', leadingIcon: 'settings', onClick: () => alert('Settings') },
                { label: 'Help', leadingIcon: 'help', trailingText: 'F1' },
                { label: 'Sign out', leadingIcon: 'logout' },
              ]}
            />
          ]}
        />
        
        <main className="main-content">
          <div className="content-body" style={{maxWidth: '1600px', margin: '0 auto', width: '100%'}}>
            {activeTab === 'dashboard' && (
              <div style={{ animation: 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)', display:'flex', flexDirection:'column', gap:'32px' }}>
                {/* Welcome Banner */}
                <div className="dashboard-banner" style={{position:'relative', overflow:'hidden'}}>
                  <div style={{position:'relative', zIndex: 2}}>
                    <h1 className="m3-display-medium" style={{fontWeight: 800, letterSpacing:'-1px'}}>Design System OS</h1>
                    <p className="m3-body-large" style={{opacity: 0.95, marginTop: '8px', maxWidth:'600px'}}>Your Material 3 library is growing. All 18 core components are verified and ready for production deployment.</p>
                    <div style={{marginTop: '32px', display:'flex', gap:'16px'}}>
                      <Button variant="elevated" style={{background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding:'0 24px'}}>
                        Explore Styles
                      </Button>
                      <Button variant="text" style={{color: 'white', padding:'0 24px'}}>View Changelog</Button>
                    </div>
                  </div>
                  <span className="material-symbols-rounded" style={{fontSize: '180px', position:'absolute', right:'-20px', bottom:'-40px', opacity: 0.15, transform:'rotate(-10deg)'}}>
                    auto_awesome
                  </span>
                </div>

                {/* Stat Grid */}
                <div className="dashboard-grid">
                  {[
                    { label: 'UI Components', value: '29', trend: '+5', icon: 'widgets', color: 'indigo' },
                    { label: 'Design Tokens', value: '352', trend: '+42', icon: 'token', color: 'teal' },
                    { label: 'Symbols (Google)', value: '3,200', trend: 'Latest', icon: 'auto_fix', color: 'orange' },
                    { label: 'Core Size (Raw)', value: '68 KB', trend: 'Optimized', icon: 'package_2', color: 'rose' }
                  ].map((stat, i) => (
                    <div key={i} className="stat-card" style={{border: '1px solid var(--md-sys-color-outline-variant)'}}>
                      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                        <div className="stat-icon-wrapper" style={{background: `var(--md-sys-color-${stat.color}-container)`, color: `var(--md-sys-color-on-${stat.color}-container)`}}>
                          <span className="material-symbols-rounded">{stat.icon}</span>
                        </div>
                        <IconButton icon="more_vert" variant="text" size="small" />
                      </div>
                      <div style={{marginTop:'12px'}}>
                        <div className="m3-label-medium" style={{opacity: 0.6, textTransform:'uppercase', letterSpacing:'1px'}}>{stat.label}</div>
                        <div className="m3-display-small" style={{fontWeight: 800, margin:'4px 0'}}>{stat.value}</div>
                        <div className="m3-label-medium" style={{color: stat.trend.includes('+') ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-on-surface-variant)', display: 'flex', alignItems: 'center', gap: '4px'}}>
                          <span className="material-symbols-rounded" style={{fontSize: '16px'}}>{stat.trend.includes('+') ? 'trending_up' : 'info'}</span>
                          {stat.trend} {stat.trend.includes('+') ? 'added recently' : 'current version'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px'}}>
                  <Card style={{padding: '32px', display:'flex', flexDirection:'column', gap:'24px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <div>
                        <h2 className="m3-title-large" style={{fontWeight: 800}}>Implementation Coverage</h2>
                        <div className="m3-label-medium" style={{opacity:0.6}}>Usage across 12 active projects</div>
                      </div>
                      <SegmentedButton selectedId="week" options={[{id:'day', label:'Beta'}, {id:'week', label:'Stable'}, {id:'month', label:'Legacy'}]} />
                    </div>
                    <div className="chart-placeholder" style={{background: 'var(--md-sys-color-surface-container-low)', overflow:'hidden'}}>
                      <div style={{zIndex: 2, textAlign:'center'}}>
                        <span className="material-symbols-rounded" style={{fontSize: '64px', opacity: 0.1}}>layers</span>
                      </div>
                      {/* Stylized Chart Area */}
                      <svg style={{position:'absolute', bottom:0, left:0, width:'100%', height:'120px'}} preserveAspectRatio="none">
                         <path d="M0,120 L0,80 C100,20 200,100 300,40 C400,-20 500,80 600,40 C700,0 800,100 800,60 L800,120 Z" fill="var(--md-sys-color-primary)" fillOpacity="0.1" />
                         <path d="M0,80 C100,20 200,100 300,40 C400,-20 500,80 600,40 C700,0 800,100 800,60" fill="none" stroke="var(--md-sys-color-primary)" strokeWidth="3" />
                      </svg>
                    </div>
                  </Card>

                  <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
                    <Card variant="outlined" style={{padding: '32px', borderStyle:'dashed', borderColor: 'var(--md-sys-color-outline)'}}>
                      <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                        <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                          <div style={{width:'40px', height:'40px', borderRadius:'20px', background:'var(--md-sys-color-secondary-container)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <span className="material-symbols-rounded" style={{color:'var(--md-sys-color-on-secondary-container)'}}>architecture</span>
                          </div>
                          <h2 className="m3-title-medium" style={{fontWeight: 700}}>Framework Health</h2>
                        </div>
                        {[
                          { label: 'React Compatibility', value: 100, color: 'var(--md-sys-color-primary)' },
                          { label: 'Style Coverage', value: 85, color: 'var(--md-sys-color-secondary)' },
                          { label: 'Unit Test Pass', value: 94, color: 'var(--md-sys-color-tertiary)' }
                        ].map((stat, i) => (
                          <div key={i} style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}} className="m3-label-medium">
                              <span>{stat.label}</span>
                              <span style={{fontWeight:700}}>{stat.value}%</span>
                            </div>
                            <div className="progress-pill">
                              <div className="progress-pill-bar" style={{width: `${stat.value}%`, background: stat.color}}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Alert variant="info" title="V3.2.0 Ready">
                      New Carousel and SideSheet components are now available in the production branch.
                    </Alert>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'semantic' && (
              <div style={{display:'flex', flexDirection:'column', gap:'40px'}}>
                <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '32px'}}>
                  <Showcase title="Primary Colors" component={
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                      <Button color="primary" variant="filled">Filled Primary</Button>
                      <Button color="primary" variant="tonal">Tonal Primary</Button>
                      <Button color="primary" variant="outlined">Outlined Primary</Button>
                    </div>
                  } code={`<Button color="primary" variant="filled">Primary</Button>\n<Button color="primary" variant="tonal">Primary</Button>\n<Button color="primary" variant="outlined">Primary</Button>`} />

                  <Showcase title="Success Colors" component={
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                      <Button color="success" variant="filled">Filled</Button>
                      <Button color="success" variant="tonal">Tonal</Button>
                      <Button color="success" variant="outlined">Outlined</Button>
                    </div>
                  } code={`<Button color="success" variant="filled">Label</Button>\n<Button color="success" variant="tonal">Label</Button>\n<Button color="success" variant="outlined">Label</Button>`} />

                  <Showcase title="Warning Colors" component={
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                      <Button color="warning" variant="filled">Filled</Button>
                      <Button color="warning" variant="tonal">Tonal</Button>
                      <Button color="warning" variant="outlined">Outlined</Button>
                    </div>
                  } code={`<Button color="warning" variant="filled">Label</Button>\n<Button color="warning" variant="tonal">Label</Button>\n<Button color="warning" variant="outlined">Label</Button>`} />

                  <Showcase title="Error Colors" component={
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                      <Button color="error" variant="filled">Filled</Button>
                      <Button color="error" variant="tonal">Tonal</Button>
                      <Button color="error" variant="outlined">Outlined</Button>
                    </div>
                  } code={`<Button color="error" variant="filled">Label</Button>\n<Button color="error" variant="tonal">Label</Button>\n<Button color="error" variant="outlined">Label</Button>`} />

                   <Showcase title="Info Colors" component={
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                      <Button color="info" variant="filled">Filled</Button>
                      <Button color="info" variant="tonal">Tonal</Button>
                      <Button color="info" variant="outlined">Outlined</Button>
                    </div>
                  } code={`<Button color="info" variant="filled">Label</Button>\n<Button color="info" variant="tonal">Label</Button>\n<Button color="info" variant="outlined">Label</Button>`} />
                </div>

                <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                  <h3 style={{color:'var(--md-sys-color-primary)', fontSize:'18px', fontWeight:'600'}}>Creative Palette Variants</h3>
                  <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '32px'}}>
                    <Showcase title="Indigo" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="indigo" variant="filled">Filled</Button>
                        <Button color="indigo" variant="tonal">Tonal</Button>
                        <Button color="indigo" variant="outlined">Outlined</Button>
                      </div>
                    } code={`<Button color="indigo" variant="filled">Filled</Button>\n<Button color="indigo" variant="tonal">Tonal</Button>\n<Button color="indigo" variant="outlined">Outlined</Button>`} />

                    <Showcase title="Teal" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="teal" variant="filled">Filled</Button>
                        <Button color="teal" variant="tonal">Tonal</Button>
                        <Button color="teal" variant="outlined">Outlined</Button>
                      </div>
                    } code={`<Button color="teal" variant="filled">Filled</Button>\n<Button color="teal" variant="tonal">Tonal</Button>\n<Button color="teal" variant="outlined">Outlined</Button>`} />

                    <Showcase title="Rose" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="rose" variant="filled">Filled</Button>
                        <Button color="rose" variant="tonal">Tonal</Button>
                        <Button color="rose" variant="outlined">Outlined</Button>
                      </div>
                    } code={`<Button color="rose" variant="filled">Filled</Button>\n<Button color="rose" variant="tonal">Tonal</Button>\n<Button color="rose" variant="outlined">Outlined</Button>`} />

                    <Showcase title="Orange" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="orange" variant="filled">Filled</Button>
                        <Button color="orange" variant="tonal">Tonal</Button>
                        <Button color="orange" variant="outlined">Outlined</Button>
                      </div>
                    } code={`<Button color="orange" variant="filled">Filled</Button>\n<Button color="orange" variant="tonal">Tonal</Button>\n<Button color="orange" variant="outlined">Outlined</Button>`} />
                    
                    <Showcase title="Secondary M3" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="secondary" variant="filled">Filled</Button>
                        <Button color="secondary" variant="tonal">Tonal</Button>
                      </div>
                    } code={`<Button color="secondary" variant="filled">Filled</Button>\n<Button color="secondary" variant="tonal">Tonal</Button>`} />

                    <Showcase title="Tertiary M3" component={
                      <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        <Button color="tertiary" variant="filled">Filled</Button>
                        <Button color="tertiary" variant="tonal">Tonal</Button>
                      </div>
                    } code={`<Button color="tertiary" variant="filled">Filled</Button>\n<Button color="tertiary" variant="tonal">Tonal</Button>`} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div style={{display:'flex', flexDirection:'column', gap:'40px'}}>
                <Showcase title="Display & Headline" component={
                  <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                    <div><h1 className="m3-display-large">Display Large</h1><span className="m3-label-medium">Display Large - 57/64</span></div>
                    <div><h2 className="m3-display-medium">Display Medium</h2><span className="m3-label-medium">Display Medium - 45/52</span></div>
                    <div><h3 className="m3-display-small">Display Small</h3><span className="m3-label-medium">Display Small - 36/44</span></div>
                    <Divider />
                    <div><h4 className="m3-headline-large">Headline Large</h4><span className="m3-label-medium">Headline Large - 32/40</span></div>
                    <div><h5 className="m3-headline-medium">Headline Medium</h5><span className="m3-label-medium">Headline Medium - 28/36</span></div>
                  </div>
                } code={`<h1 className="m3-display-large">Display Large</h1>
<h2 className="m3-display-medium">Display Medium</h2>
<h3 className="m3-display-small">Display Small</h3>
<h4 className="m3-headline-large">Headline Large</h4>
<h5 className="m3-headline-medium">Headline Medium</h5>`} />

                <Showcase title="Titles & Paragraphs" component={
                  <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                    <div><div className="m3-title-large">Title Large (Specialized)</div><span className="m3-label-medium">Title Large - 22/28</span></div>
                    <div><div className="m3-title-medium">Title Medium</div><span className="m3-label-medium">Title Medium - 16/24</span></div>
                    <Divider />
                    <div><p className="m3-body-large">Body Large - Standard paragraph for long form content with excellent readability. It follows Material 3 guidelines for line spacing and letter spacing.</p><span className="m3-label-medium">Body Large - 16/24</span></div>
                    <div><p className="m3-body-medium">Body Medium - Used for secondary text, smaller descriptions, and UI metadata.</p><span className="m3-label-medium">Body Medium - 14/20</span></div>
                  </div>
                } code={`<div className="m3-title-large">Title Large</div>
<div className="m3-title-medium">Title Medium</div>
<p className="m3-body-large">Body Large paragraph text...</p>
<p className="m3-body-medium">Body Medium paragraph text...</p>`} />

                <Showcase title="Specialized Titles & Effects" component={
                  <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
                    <div>
                      <h1 className="m3-display-large m3-specialized-display">Premium Display</h1>
                      <div className="m3-label-medium">Gradient Text Mask + Outfit Font</div>
                    </div>
                    <div>
                      <div className="m3-specialized-title">Categorized Section Title</div>
                      <div className="m3-label-medium">Uppercase + Letter Spacing (2px)</div>
                    </div>
                  </div>
                } code={`<h1 className="m3-display-large m3-specialized-display">Premium</h1>
<div className="m3-specialized-title">Category Title</div>`} />

                <Showcase title="Labels" component={
                  <div style={{display:'flex', gap:'24px', flexWrap:'wrap'}}>
                    <span className="m3-label-large">Label Large</span>
                    <span className="m3-label-medium">Label Medium</span>
                    <span className="m3-label-small">Label Small</span>
                  </div>
                } code={`<span className="m3-label-large">Label Large</span>
<span className="m3-label-medium">Label Medium</span>
<span className="m3-label-small">Label Small</span>`} />
              </div>
            )}

            {activeTab === 'media' && (
              <div style={{display:'flex', flexDirection:'column', gap:'40px'}}>
                <Showcase title="Carousel" component={
                  <div style={{maxWidth: '800px', width: '100%'}}>
                    <Carousel images={[
                      'https://picsum.photos/seed/m3_1/800/450',
                      'https://picsum.photos/seed/m3_2/800/450',
                      'https://picsum.photos/seed/m3_3/800/450'
                    ]} />
                  </div>
                } code={`<Carousel images={['url1', 'url2', 'url3']} />`} />

                <Showcase title="Images & Specialized Shapes" component={
                  <div style={{display:'flex', gap:'32px', flexWrap:'wrap', justifyContent:'center'}}>
                    <div style={{textAlign:'center'}}>
                      <img className="m3-img" src="https://picsum.photos/seed/standard/200/200" alt="M3" style={{width:'200px', height:'200px'}} />
                      <div className="m3-label-medium" style={{marginTop:'12px'}}>Round Corners (16dp)</div>
                    </div>
                    <div style={{textAlign:'center'}}>
                      <img className="m3-img m3-img-circle" src="https://picsum.photos/seed/circle/200/200" alt="Circle" style={{width:'200px', height:'200px'}} />
                      <div className="m3-label-medium" style={{marginTop:'12px'}}>Avatar Circle</div>
                    </div>
                    <div style={{textAlign:'center'}}>
                      <img className="m3-img m3-img-tonal" src="https://picsum.photos/seed/tonal/200/200" alt="Tonal" style={{width:'200px', height:'200px'}} />
                      <div className="m3-label-medium" style={{marginTop:'12px'}}>Tonal Utility Filter</div>
                    </div>
                  </div>
                } code={`<img className="m3-img" src="..." />
<img className="m3-img m3-img-circle" src="..." />
<img className="m3-img m3-img-tonal" src="..." />`} />

                <Showcase title="Icon Gallery" component={
                   <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px'}}>
                    {['home', 'search', 'settings', 'favorite', 'share', 'delete', 'edit', 'add', 'person', 'mail', 'notifications', 'calendar_today', 'info', 'check_circle', 'warning', 'error'].map(icon => (
                      <div key={icon} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', padding:'20px', background:'var(--md-sys-color-surface-container)', borderRadius:'16px'}}>
                        <span className="material-symbols-rounded" style={{fontSize: '32px'}}>{icon}</span>
                        <span className="m3-label-small">{icon}</span>
                      </div>
                    ))}
                  </div>
                } code={`<span className="material-symbols-rounded">home</span>
<span className="material-symbols-rounded">search</span>
<span className="material-symbols-rounded">settings</span>`} />
              </div>
            )}

            {activeTab === 'buttons' && (
              <>
                <Showcase title="Top App Bar" component={
                  <div style={{width:'100%', border:'1px solid var(--md-sys-color-outline-variant)', borderRadius:'8px', overflow:'hidden'}}>
                    <TopAppBar title="Title" leadingIcon="arrow_back" trailingIcons={['attach_file', 'calendar_today', 'more_vert']} />
                  </div>
                } code={`<TopAppBar \n  title="Title" \n  leadingIcon="arrow_back" \n  trailingIcons={['attach_file', 'calendar_today', 'more_vert']} \n/>`} />
              <Showcase title="Buttons" component={
                <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
                  <Button variant="filled">Filled</Button>
                  <Button variant="tonal">Tonal</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="elevated">Elevated</Button>
                  <Button variant="text">Text</Button>
                </div>
              } code={`<Button variant="filled">Filled</Button>
<Button variant="tonal">Tonal</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="elevated">Elevated</Button>
<Button variant="text">Text</Button>`} />
              
              <Showcase title="Menu (Dropdown)" component={
                <div style={{display:'flex', gap:'24px', alignItems:'center'}}>
                   <Menu 
                    trigger={<Button variant="tonal">Open Menu</Button>} 
                    items={[
                      { label: 'Edit', leadingIcon: 'edit', trailingText: 'Ctrl+E' },
                      { label: 'Duplicate', leadingIcon: 'content_copy' },
                      { label: 'Share', leadingIcon: 'share' },
                      { label: 'Delete', leadingIcon: 'delete', onClick: () => alert('Delete clicked') },
                    ]}
                  />
                  <Menu 
                    trigger={<IconButton icon="more_horiz" variant="outlined" />} 
                    items={[
                      { label: 'Archive', leadingIcon: 'archive' },
                      { label: 'Mute', leadingIcon: 'volume_off' },
                    ]}
                  />
                </div>
              } code={`<Menu 
  trigger={<Button variant="tonal">Open Menu</Button>} 
  items={[
    { label: 'Edit', leadingIcon: 'edit', trailingText: 'Ctrl+E' },
    { label: 'Duplicate', leadingIcon: 'content_copy' },
    { label: 'Share', leadingIcon: 'share' },
    { label: 'Delete', leadingIcon: 'delete', onClick: () => {} },
  ]} 
/>

<Menu 
  trigger={<IconButton icon="more_horiz" variant="outlined" />} 
  items={[
    { label: 'Archive', leadingIcon: 'archive' },
    { label: 'Mute', leadingIcon: 'volume_off' },
  ]} 
/>`} />

              <Showcase title="Segmented Button" component={<SegmentedButton selectedId={selectedSegment} onChange={setSelectedSegment} options={[{id:'day', label:'Day'}, {id:'week', label:'Week'}, {id:'month', label:'Month'}]} />} 
                code={`<SegmentedButton 
  selectedId={selectedId} 
  onChange={setSelectedId} 
  options={[
    {id:'day', label:'Day'}, 
    {id:'week', label:'Week'}, 
    {id:'month', label:'Month'}
  ]} 
/>`} />
              <Showcase title="FAB" component={<><FAB icon="add" size="small" /><FAB icon="edit" /><FAB icon="share" size="large" /><FAB icon="palette" label="Extended FAB" /></>} 
                code={`<FAB icon="add" size="small" />
<FAB icon="edit" />
<FAB icon="share" size="large" />
<FAB icon="palette" label="Extended FAB" />`} />
            </>
          )}

          {activeTab === 'textfields' && (
            <>
              <Showcase title="Search Bar" component={<SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)} />} code={`<SearchBar \n  placeholder="Search..." \n  value={searchText} \n  onChange={(e) => setSearchText(e.target.value)} \n/>`} />
              <Showcase title="TextFields" component={<div style={{display:'flex', flexDirection:'column', gap:'24px', width:'100%'}}><TextField label="Label Text" icon="person" /><TextField label="Password" icon="lock" type="password" /><TextField label="Error State" error helperText="This field is required" icon="error" /></div>} code={`<TextField label="Label Text" icon="person" />
<TextField label="Password" icon="lock" type="password" />
<TextField label="Error State" error helperText="This field is required" icon="error" />`} />
            </>
          )}

          {activeTab === 'selection' && (
            <Showcase title="Selection Controls" component={<div style={{display:'flex', flexDirection:'column', gap:'24px', width:'100%', maxWidth:'400px'}}>
              <div style={{display:'flex', gap:'16px', alignItems:'center'}}><Switch checked={switchState} onChange={()=>setSwitchState(!switchState)} /><span>Switch</span></div>
              <div style={{display:'flex', gap:'16px', alignItems:'center'}}><Checkbox label="Checkbox Option" checked={checkState} onChange={()=>setCheckState(!checkState)} /></div>
              <div style={{width:'100%', marginTop: '8px'}}><Slider value={sliderValue} onChange={e=>setSliderValue(e.target.value)} /><div style={{textAlign:'left', marginTop:'12px', fontSize:'14px', color: 'var(--md-sys-color-on-surface-variant)'}}>Selected Value: <b>{sliderValue}</b></div></div>
            </div>} code={`<Switch checked={switchState} onChange={setSwitchState} />

<Checkbox 
  label="Checkbox Option" 
  checked={checkState} 
  onChange={setCheckState} 
/>

<Slider 
  value={sliderValue} 
  onChange={e => setSliderValue(e.target.value)} 
/>`} />
          )}

          {activeTab === 'navigation' && (
            <>
              <Showcase title="Tab Navigation" component={
                <div style={{width:'100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--md-sys-color-outline-variant)'}}>
                  <Tabs activeTab={activeTabId} onChange={setActiveTabId} tabs={[
                    {id:'tab1', label:'Home', icon:'home'}, 
                    {id:'tab2', label:'Settings', icon:'settings'}, 
                    {id:'tab3', label:'Account', icon:'person'}
                  ]} />
                  <div style={{padding:'60px 20px', textAlign:'center', background:'var(--md-sys-color-surface)', color: 'var(--md-sys-color-on-surface)'}}>
                    <span className="material-symbols-rounded" style={{fontSize: '48px', marginBottom: '12px', opacity: 0.5}}>
                      {activeTabId === 'tab1' ? 'home' : activeTabId === 'tab2' ? 'settings' : 'person'}
                    </span>
                    <div style={{fontSize: '18px', fontWeight: '500'}}>Displaying {activeTabId} content</div>
                    <p style={{opacity: 0.7, marginTop: '8px'}}>Material 3 Primary Tabs with active indicator.</p>
                  </div>
                </div>
              } code={`<Tabs 
  activeTab={activeId} 
  onChange={setActiveId} 
  tabs={[
    {id:'tab1', label:'Home', icon:'home'}, 
    {id:'tab2', label:'Settings', icon:'settings'}, 
    {id:'tab3', label:'Account', icon:'person'}
  ]} 
/>`} />
              
               <Showcase title="Bottom Navigation Bar" component={
                <NavigationBar 
                  activeId={navActiveId} 
                  onChange={setNavActiveId} 
                  items={[
                    { id: 'home', label: 'Home', icon: 'home' },
                    { id: 'search', label: 'Search', icon: 'search', badge: true },
                    { id: 'notif', label: 'Notifications', icon: 'notifications' },
                    { id: 'profile', label: 'Profile', icon: 'person' }
                  ]} 
                />
              } code={`<NavigationBar 
  activeId={activeId} 
  onChange={setActiveId} 
  items={[
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search', badge: true },
    { id: 'notif', label: 'Notifications', icon: 'notifications' },
    { id: 'profile', label: 'Profile', icon: 'person' }
  ]} 
/>`} />

              <Showcase title="Navigation Rail" component={
                <div style={{height:'400px', border:'1px solid var(--md-sys-color-outline-variant)', borderRadius:'12px', overflow:'hidden', display:'flex'}}>
                  <NavigationRail 
                    items={menuItems.slice(0, 5)} 
                    activeId={railActiveId} 
                    onChange={setRailActiveId}
                    fab={<FAB icon="add" size="small" />}
                  />
                  <div style={{flex:1, background:'var(--md-sys-color-surface)', padding:'24px', fontSize:'14px'}}>Content area next to Rail</div>
                </div>
              } code={`<NavigationRail 
  items={items} 
  activeId={activeId} 
  onChange={setActiveId}
  fab={<FAB icon="add" size="small" />} 
/>`} />

              <Showcase title="Navigation Drawer" component={
                <div style={{height:'400px', border:'1px solid var(--md-sys-color-outline-variant)', borderRadius:'12px', overflow:'hidden', display:'flex', width: '100%'}}>
                  <NavigationDrawer 
                    items={menuItems.slice(0, 4)} 
                    activeId={drawerActiveId} 
                    onChange={setDrawerActiveId}
                    header={<div style={{fontWeight:500, opacity:0.7, padding: '0 12px'}}>DRAWER HEADER</div>}
                    className="demo-drawer"
                  />
                  <div style={{flex:1, background:'var(--md-sys-color-surface)', padding:'24px', fontSize:'14px'}}>
                    The Navigation Drawer provides access to destinations in your app.
                  </div>
                </div>
              } code={`<NavigationDrawer \n  items={items} \n  activeId={activeId} \n  onChange={setActiveId}\n  header={<div className="drawer-header">DRAWER HEADER</div>}\n/>`} />
              
              <Showcase title="Navigation Pills" description="Pill-shaped chips used for filtering or navigation." component={
                <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                  {['All', 'Trending', 'Local', 'Technology', 'Travel'].map(p => (
                    <Chip key={p} label={p} selected={selectedChip === p} onClick={() => setSelectedChip(p)} />
                  ))}
                </div>
              } code={`{['All', 'Trending', 'Local', 'Technology', 'Travel'].map(p => (
  <Chip 
    key={p} 
    label={p} 
    selected={selectedChip === p} 
    onClick={() => setSelectedChip(p)} 
  />
))}`} />
            </>
          )}

          {activeTab === 'chips' && (
            <Showcase title="Chips & Badges" component={
              <div style={{display:'flex', flexDirection:'row', gap:'24px', flexWrap: 'wrap', alignItems:'center', justifyContent: 'center'}}>
                <div style={{display:'flex', gap:'12px'}}>
                  <Chip label="Assist Chip" icon="event" selected={selectedChip==='one'} onClick={()=>setSelectedChip('one')} />
                  <Chip label="Filter Chip" selected={selectedChip==='two'} onClick={()=>setSelectedChip('two')} icon={selectedChip==='two'?'check':null}/>
                  <Chip label="Input Chip" icon="face" onDelete={() => alert('Deleted!')} />
                </div>
                <div style={{width: '2px', height: '32px', background: 'var(--md-sys-color-outline-variant)'}}></div>
                <div style={{display:'flex', gap:'32px', alignItems: 'center'}}>
                  <Badge variant="large" content="12">
                    <IconButton icon="mail" variant="filled" />
                  </Badge>
                  <Badge content="!">
                    <IconButton icon="notifications" variant="tonal" />
                  </Badge>
                  <Badge variant="small">
                    <span className="material-symbols-rounded">chat</span>
                  </Badge>
                </div>
              </div>
            } code={`<Chip label="Assist Chip" icon="event" selected={true} />
<Chip label="Filter Chip" selected={true} icon="check" />
<Chip label="Input Chip" icon="face" onDelete={() => {}} />

<Badge variant="large" content="12">
  <IconButton icon="mail" variant="filled" />
</Badge>

<Badge content="!">
  <IconButton icon="notifications" variant="tonal" />
</Badge>

<Badge variant="small">
  <span className="material-symbols-rounded">chat</span>
</Badge>`} />
          )}

          {activeTab === 'cards' && (
            <>
              <Showcase title="Cards" component={<><Card style={{width:'320px'}}><h3>Elevated Card</h3><p style={{marginTop:'12px', opacity:0.8}}>Material 3 card with Bootstrap primary theme.</p><Divider style={{margin:'20px 0'}}/><div style={{display:'flex', gap:'8px'}}><Button variant="filled">Read</Button><Button variant="text">Share</Button></div></Card><Card variant="outlined" style={{width:'320px'}}><h3>Outlined Card</h3><p style={{marginTop:'12px', opacity:0.8}}>Perfect for secondary content.</p></Card></>} 
                code={`<Card style={{width:'320px'}}>
  <h3>Elevated Card</h3>
  <p>Content goes here...</p>
  <Divider />
  <Button variant="filled">Action</Button>
</Card>

<Card variant="outlined" style={{width:'320px'}}>
  <h3>Outlined Card</h3>
</Card>`} />
              <Showcase title="Lists" component={<div style={{width:'100%', background:'var(--md-sys-color-surface)', borderRadius:'12px', border:'1px solid var(--md-sys-color-outline-variant)'}}><List><ListItem headline="Headline Text" supportingText="Supporting line text" leadingIcon="person" trailingIcon="chevron_right" /><Divider/><ListItem headline="Settings" leadingIcon="settings" onClick={()=>alert('Settings')}/><Divider/><ListItem headline="Help & Feedback" leadingIcon="help" /></List></div>} 
                code={`<List>
  <ListItem 
    headline="Headline Text" 
    supportingText="Supporting line text" 
    leadingIcon="person" 
    trailingIcon="chevron_right" 
  />
  <Divider />
  <ListItem 
    headline="Settings" 
    leadingIcon="settings" 
    onClick={() => {}} 
  />
  <Divider />
  <ListItem headline="Help & Feedback" leadingIcon="help" />
</List>`} />
            </>
          )}

          {activeTab === 'feedback' && (
            <Showcase title="Feedback" component={
              <div style={{display:'flex', flexDirection:'column', gap:'40px', width:'100%', maxWidth: '500px'}}>
                <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                  <div style={{display:'flex', justifyContent: 'space-between', fontSize:'14px', fontWeight: '500'}}>
                    <span>Linear Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <ProgressBar value={progress} />
                </div>
                
                <div style={{display:'flex', alignItems:'center', gap:'32px', background: 'rgba(0,0,0,0.03)', padding: '24px', borderRadius: '16px'}}>
                  <ProgressBar variant="circular" value={progress} />
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize:'16px', fontWeight:'500'}}>Circular Loading</span>
                    <span style={{fontSize:'14px', opacity: 0.7}}>Task performance: {progress}%</span>
                  </div>
                </div>
              </div>
            } code={`<ProgressBar value={${progress}} />
<ProgressBar variant="circular" value={${progress}} />`} />
          )}

            {activeTab === 'dialogs' && (
              <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
                <Showcase title="Overlays & Sheets" component={
                  <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
                    <Button variant="filled" onClick={()=>setIsDialogOpen(true)}>Open Dialog</Button>
                    <Button variant="tonal" onClick={() => setIsSideSheetOpen(true)}>Open Side Sheet</Button>
                    <Button variant="outlined" onClick={()=>setSnackOpen(true)}>Show Toast</Button>
                  </div>
                } code={`<Dialog 
  isOpen={isDialogOpen} 
  onClose={() => setIsDialogOpen(false)} 
  title="Dialog Title"
>
  Content...
</Dialog>

<SideSheet 
  isOpen={isSideSheetOpen} 
  onClose={() => setIsSideSheetOpen(false)} 
  title="Side Sheet Title"
>
  Content...
</SideSheet>

<Snackbar 
  isOpen={snackOpen} 
  message="Action message" 
  onClose={() => setSnackOpen(false)} 
/>`} />
                
                <Dialog isOpen={isDialogOpen} onClose={()=>setIsDialogOpen(false)} title="Basic Dialog" actions={<><Button variant="text" onClick={()=>setIsDialogOpen(false)}>Cancel</Button><Button variant="filled" onClick={()=>setIsDialogOpen(false)}>Apply</Button></>}>
                  This is a standard Material 3 dialog. It uses a centered surface to focus user attention on a critical task or information.
                </Dialog>

                <SideSheet 
                  isOpen={isSideSheetOpen} 
                  onClose={() => setIsSideSheetOpen(false)} 
                  title="Settings Panel"
                  actions={<><Button variant="text" onClick={()=>setIsSideSheetOpen(false)}>Reset</Button><Button variant="filled" onClick={()=>setIsSideSheetOpen(false)}>Save</Button></>}
                >
                  <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                    <p className="m3-body-medium">Side sheets are used to present supplementary content that supports the main content of a page.</p>
                    <TextField label="Configuration Name" />
                    <Switch label="Enable Notifications" checked={switchState} onChange={setSwitchState} />
                  </div>
                </SideSheet>

                <Snackbar isOpen={snackOpen} message="Item archived" actionLabel="Undo" onAction={()=>{}} onClose={()=>setSnackOpen(false)} />
              </div>
            )}

            {activeTab === 'feedback' && (
              <Showcase title="Bottom Sheet" component={
                <>
                  <Button variant="tonal" onClick={() => setIsBottomSheetOpen(true)}>Open Bottom Sheet</Button>
                  <BottomSheet 
                    isOpen={isBottomSheetOpen} 
                    onClose={() => setIsBottomSheetOpen(false)}
                    title="Sheet Header"
                  >
                    <div style={{padding:'16px'}}>
                      <List>
                        <ListItem headline="Share link" leadingIcon="share" />
                        <ListItem headline="Get link" leadingIcon="link" />
                        <ListItem headline="Edit name" leadingIcon="edit" />
                        <ListItem headline="Delete" leadingIcon="delete" />
                      </List>
                    </div>
                  </BottomSheet>
                </>
              } code={`<BottomSheet \n  isOpen={isSheetOpen} \n  onClose={() => setIsSheetOpen(false)} \n  title="Header Title"\n>\n  <List>\n    <ListItem headline="Share" leadingIcon="share" />\n  </List>\n</BottomSheet>`} />
            )}

            {activeTab === 'alerts' && (
              <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
                <Showcase title="Feedback Banners" component={
                  <div style={{display:'flex', flexDirection:'column', gap:'16px', width:'100%'}}>
                    <Alert title="Payment Successful" variant="success">Your transaction has been processed and a confirmation email was sent.</Alert>
                    <Alert title="Missing Information" variant="warning">Please update your billing address to avoid service interruptions.</Alert>
                    <Alert title="Connection Error" variant="error">Unable to reach servers. Please check your internet connection and try again.</Alert>
                    <Alert title="System Update" variant="info">New security patches are available for your workspace.</Alert>
                  </div>
                } code={`<Alert title="Payment Successful" variant="success">
  Your transaction has been processed.
</Alert>

<Alert title="Missing Information" variant="warning">
  Please update your billing address.
</Alert>

<Alert title="Connection Error" variant="error">
  Unable to reach servers.
</Alert>

<Alert title="System Update" variant="info">
  New security patches are available.
</Alert>`} />
              </div>
            )}

            {activeTab === 'pagination' && (
              <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
                <Showcase title="Standard Pagination" component={
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'24px', width:'100%'}}>
                    <Pagination totalPages={10} currentPage={currentPage} onPageChange={setCurrentPage} />
                    <div className="m3-label-medium" style={{opacity:0.7}}>Displaying page {currentPage} of 10</div>
                  </div>
                } code={`<Pagination totalPages={10} currentPage={currentPage} onPageChange={setCurrentPage} />`} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
