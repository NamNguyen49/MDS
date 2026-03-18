import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Button from "./lib/m3/Button";
import TextField from "./lib/m3/TextField";
import Card from "./lib/m3/Card";
import Switch from "./lib/m3/Switch";
import Checkbox from "./lib/m3/Checkbox";
import Dialog from "./lib/m3/Dialog";
import IconButton from "./lib/m3/IconButton";
import FAB from "./lib/m3/FAB";
import Chip from "./lib/m3/Chip";
import Badge from "./lib/m3/Badge";
import ProgressBar from "./lib/m3/ProgressBar";
import Slider from "./lib/m3/Slider";
import Divider from "./lib/m3/Divider";
import { List, ListItem } from "./lib/m3/List";
import Tabs from "./lib/m3/Tabs";
import SegmentedButton from "./lib/m3/SegmentedButton";
import Snackbar from "./lib/m3/Snackbar";
import NavigationBar from "./lib/m3/NavigationBar";
import SearchBar from "./lib/m3/SearchBar";
import Tooltip from "./lib/m3/Tooltip";
import { Showcase, ExampleCard } from "./components/ui/Showcase";
import TopAppBar from "./lib/m3/TopAppBar";
import NavigationDrawer from "./lib/m3/NavigationDrawer";
import NavigationRail from "./lib/m3/NavigationRail";
import BottomSheet from "./lib/m3/BottomSheet";
import Menu from "./lib/m3/Menu";
import Alert from "./lib/m3/Alert";
import Pagination from "./lib/m3/Pagination";
import Carousel from "./lib/m3/Carousel";
import SideSheet from "./lib/m3/SideSheet";
import Radio, { RadioGroup } from "./lib/m3/Radio";
import Accordion from "./lib/m3/Accordion";
import Skeleton from "./lib/m3/Skeleton";
import EmptyState from "./lib/m3/EmptyState";
import Avatar from "./lib/m3/Avatar";
import Select from "./lib/m3/Select";
import IconPicker from "./lib/m3/IconPicker";
import Table from "./lib/m3/Table";
import "./index.css";

const ComponentPreview = ({ id }) => {
  const boxStyle = {
    background: "var(--md-sys-color-primary)",
    borderRadius: "4px",
    opacity: 0.2,
  };

  switch (id) {
    case "buttons":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "24px",
              borderRadius: "4px",
              background: "var(--md-sys-color-primary)",
              opacity: 0.8,
            }}
          ></div>
          <div
            style={{
              width: "64px",
              height: "24px",
              borderRadius: "4px",
              border: "1px solid var(--md-sys-color-outline)",
              opacity: 0.6,
            }}
          ></div>
          <div
            style={{
              width: "64px",
              height: "24px",
              borderRadius: "4px",
              background: "var(--md-sys-color-error)",
              opacity: 0.5,
            }}
          ></div>
        </div>
      );
    case "textfields":
      return (
        <div
          style={{
            width: "120px",
            height: "48px",
            borderBottom: "2px solid var(--md-sys-color-primary)",
            background: "var(--md-sys-color-surface-container-high)",
            borderRadius: "4px 4px 0 0",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "24px",
              background: "var(--md-sys-color-primary)",
              animation: "blink 1s infinite",
            }}
          ></div>
        </div>
      );
    case "typography":
      return (
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "1px dashed var(--md-sys-color-outline)",
              padding: "8px 16px",
              borderRadius: "4px",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                fontWeight: 700,
                color: "var(--md-sys-color-primary)",
                fontFamily: "serif",
              }}
            >
              Aa
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              width: "20px",
              height: "20px",
              borderLeft: "1px solid var(--md-sys-color-outline)",
              borderTop: "1px solid var(--md-sys-color-outline)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              right: "-10px",
              width: "20px",
              height: "20px",
              borderRight: "1px solid var(--md-sys-color-outline)",
              borderBottom: "1px solid var(--md-sys-color-outline)",
            }}
          ></div>
        </div>
      );
    case "navigation":
      return (
        <div
          style={{
            width: "140px",
            height: "100px",
            border: "1px solid var(--md-sys-color-outline-variant)",
            borderRadius: "4px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "100%",
              borderRight: "1px solid var(--md-sys-color-outline-variant)",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: "var(--md-sys-color-primary)",
                opacity: 0.4,
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: "var(--md-sys-color-outline-variant)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "4px",
                background: "var(--md-sys-color-outline-variant)",
              }}
            ></div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "12px",
                background: "var(--md-sys-color-outline-variant)",
                borderRadius: "2px",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "var(--md-sys-color-surface-container-highest)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "var(--md-sys-color-surface-container-highest)",
              }}
            ></div>
          </div>
        </div>
      );
    case "cards":
      return (
        <div
          style={{
            width: "100px",
            height: "120px",
            background: "var(--md-sys-color-surface-container)",
            border: "1px solid var(--md-sys-color-outline-variant)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "60px",
              background: "var(--md-sys-color-primary-container)",
            }}
          ></div>
          <div
            style={{
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "8px",
                background: "var(--md-sys-color-outline-variant)",
                borderRadius: "4px",
              }}
            ></div>
            <div
              style={{
                width: "40%",
                height: "8px",
                background: "var(--md-sys-color-outline-variant)",
                borderRadius: "4px",
              }}
            ></div>
          </div>
        </div>
      );
    case "selection":
      return (
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "4px",
              border: "2px solid var(--md-sys-color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "18px", color: "var(--md-sys-color-primary)" }}
            >
              check
            </span>
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "2px solid var(--md-sys-color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--md-sys-color-primary)",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "40px",
              height: "20px",
              borderRadius: "10px",
              background: "var(--md-sys-color-primary)",
              display: "flex",
              alignItems: "center",
              padding: "0 4px",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "white",
              }}
            ></div>
          </div>
        </div>
      );
    case "pickers":
      return (
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid var(--md-sys-color-outline-variant)",
            borderRadius: "8px",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "8px",
                background: "var(--md-sys-color-outline-variant)",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "var(--md-sys-color-primary)",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
            }}
          >
            {Array(21)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "2px",
                    background:
                      i === 12
                        ? "var(--md-sys-color-primary)"
                        : "var(--md-sys-color-surface-container-highest)",
                  }}
                ></div>
              ))}
          </div>
        </div>
      );
    case "semantic":
      return (
        <div style={{ display: "flex", gap: "4px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--md-sys-color-primary)",
            }}
          ></div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--md-sys-color-secondary)",
            }}
          ></div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--md-sys-color-tertiary)",
            }}
          ></div>
        </div>
      );
    case "icons":
      return (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "32px", color: "var(--md-sys-color-primary)" }}
          >
            face
          </span>
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "32px",
              color: "var(--md-sys-color-secondary)",
              opacity: 0.6,
            }}
          >
            favorite
          </span>
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "32px",
              color: "var(--md-sys-color-tertiary)",
              opacity: 0.4,
            }}
          >
            star
          </span>
        </div>
      );
    case "alerts":
      return (
        <div
          style={{
            width: "160px",
            height: "40px",
            background: "var(--md-sys-color-info-container)",
            borderLeft: "4px solid var(--md-sys-color-info)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: "8px",
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "20px",
              color: "var(--md-sys-color-on-info-container)",
            }}
          >
            info
          </span>
          <div
            style={{
              width: "60%",
              height: "8px",
              background: "var(--md-sys-color-on-info-container)",
              opacity: 0.3,
            }}
          ></div>
        </div>
      );
    case "dialogs":
      return (
        <div
          style={{
            width: "140px",
            height: "100px",
            background: "var(--md-sys-color-surface-container-high)",
            borderRadius: "28px",
            border: "1px solid var(--md-sys-color-outline-variant)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "12px",
              background: "var(--md-sys-color-on-surface)",
              opacity: 0.1,
              borderRadius: "4px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "auto",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "8px",
                background: "var(--md-sys-color-primary)",
                opacity: 0.5,
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "12px",
                background: "var(--md-sys-color-primary)",
                borderRadius: "6px",
              }}
            ></div>
          </div>
        </div>
      );
    case "chips":
      return (
        <div style={{ display: "flex", gap: "8px" }}>
          <div
            style={{
              padding: "4px 12px",
              borderRadius: "8px",
              border: "1px solid var(--md-sys-color-outline)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "var(--md-sys-color-primary)",
                borderRadius: "50%",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "6px",
                background: "var(--md-sys-color-outline)",
                opacity: 0.5,
              }}
            ></div>
          </div>
          <div
            style={{
              padding: "8px",
              background: "var(--md-sys-color-error)",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                background: "var(--md-sys-color-error-container)",
                color: "var(--md-sys-color-on-error-container)",
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 4px",
                borderRadius: "10px",
              }}
            >
              7
            </div>
          </div>
        </div>
      );
    case "tables":
      return (
        <div
          style={{
            width: "150px",
            height: "80px",
            border: "1px solid var(--md-sys-color-outline-variant)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "24px",
              background: "var(--md-sys-color-surface-container)",
              borderBottom: "1px solid var(--md-sys-color-outline-variant)",
            }}
          ></div>
          <div
            style={{
              flex: 1,
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "var(--md-sys-color-surface-container-highest)",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "var(--md-sys-color-surface-container-highest)",
              }}
            ></div>
          </div>
        </div>
      );
    case "pagination":
      return (
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--md-sys-color-primary)",
            }}
          ></div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--md-sys-color-surface-container-highest)",
            }}
          ></div>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "var(--md-sys-color-surface-container-highest)",
            }}
          ></div>
        </div>
      );
    case "feedback":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "var(--md-sys-color-surface-container-highest)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                background: "var(--md-sys-color-primary)",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "3px solid var(--md-sys-color-primary-container)",
              borderTopColor: "var(--md-sys-color-primary)",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      );
    default:
      return (
        <div
          style={{
            width: "120px",
            height: "80px",
            background: "var(--md-sys-color-surface-container)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "40px", opacity: 0.1 }}
          >
            {id}
          </span>
        </div>
      );
  }
};

function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [theme, setTheme] = useState(
    localStorage.getItem("mds-theme") || "light",
  );
  const [switchState, setSwitchState] = useState(true);
  const [checkState, setCheckState] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState("one");
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [activeTabId, setActiveTabId] = useState("tab1");
  const [selectedSegment, setSelectedSegment] = useState("day");
  const [snackOpen, setSnackOpen] = useState(false);
  const [navActiveId, setNavActiveId] = useState("home");
  const [searchText, setSearchText] = useState("");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [railActiveId, setRailActiveId] = useState("buttons");
  const [drawerActiveId, setDrawerActiveId] = useState("buttons");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const [radioValue, setRadioValue] = useState("opt1");
  const [selectValue, setSelectValue] = useState("");
  const [iconValue, setIconValue] = useState("home");
  const [iconSearch, setIconSearch] = useState("");
  const [toasts, setToasts] = useState([]);

  const addToast = (type, title, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mds-theme", theme);
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(
      () => setProgress((o) => (o >= 100 ? 0 : o + 1)),
      100,
    );
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { type: "header", label: "Main" },
    { id: "overview", label: "Overview", icon: "grid_view" },
    { type: "header", label: "Styles" },
    { id: "semantic", label: "Semantic Colors", icon: "palette" },
    { id: "typography", label: "Typography", icon: "text_fields" },
    { id: "icons", label: "Icon Library", icon: "face" },
    { type: "header", label: "Components" },
    { id: "buttons", label: "Buttons & FAB", icon: "smart_button" },
    { id: "textfields", label: "Inputs & Search", icon: "edit_square" },
    { id: "selection", label: "Selection", icon: "check_box" },
    { id: "pickers", label: "Pickers", icon: "ads_click" },
    { id: "navigation", label: "Navigation", icon: "navigation" },
    { id: "chips", label: "Chips & Badges", icon: "label" },
    { id: "cards", label: "Cards & Lists", icon: "view_agenda" },
    { id: "alerts", label: "Alerts & Banners", icon: "warning" },
    { id: "tables", label: "Data Tables", icon: "table_rows" },
    { id: "pagination", label: "Pagination", icon: "last_page" },
    { id: "feedback", label: "Feedback", icon: "sync" },
    { id: "dialogs", label: "Dialogs & Snack", icon: "chat_bubble" },
  ];

  // Project Metrics (Calculated)
  const TOTAL_COMPONENTS = 37; // Total files in src/lib/m3
  const TOTAL_TOKENS = 373; // --md-sys-color- variables in index.css
  const CORE_SIZE_KB = "51.3"; // index.css size
  const CORE_ICONS = [
    "home",
    "search",
    "settings",
    "favorite",
    "share",
    "delete",
    "edit",
    "add",
    "person",
    "mail",
    "notifications",
    "calendar_today",
    "info",
    "check_circle",
    "warning",
    "error",
    "dashboard",
    "widgets",
    "token",
    "auto_fix",
    "layers",
  ];
  const ICON_DATABASE = [
    "search",
    "settings",
    "home",
    "menu",
    "close",
    "check",
    "delete",
    "edit",
    "add",
    "person",
    "share",
    "favorite",
    "info",
    "help",
    "arrow_back",
    "arrow_forward",
    "expand_more",
    "expand_less",
    "notifications",
    "shopping_cart",
    "email",
    "call",
    "chat",
    "calendar_today",
    "lock",
    "flight",
    "explore",
    "attachment",
    "cloud",
    "file_download",
    "file_upload",
    "schedule",
    "star",
    "thumb_up",
    "thumb_down",
    "verified",
    "update",
    "light_mode",
    "dark_mode",
    "sync",
    "language",
    "login",
    "logout",
    "account_circle",
    "group",
    "workspace_premium",
    "security",
    "public",
    "local_shipping",
    "local_offer",
    "payments",
    "dashboard",
    "widgets",
    "inventory",
    "assessment",
    "grade",
    "bookmark",
    "visibility",
    "visibility_off",
    "print",
    "mouse",
    "keyboard",
    "smartphone",
    "desktop_windows",
    "watch",
    "camera",
    "image",
    "palette",
    "music_note",
    "mic",
    "play_arrow",
    "pause",
    "stop",
    "volume_up",
    "volume_off",
    "wifi",
    "bluetooth",
    "battery_full",
    "flash_on",
    "warning",
    "report",
    "error",
    "campaign",
    "help_outline",
    "priority_high",
    "description",
    "task",
    "sticky_note_2",
    "list",
    "grid_view",
    "table_chart",
    "view_list",
    "analytics",
    "pie_chart",
    "show_chart",
    "bar_chart",
    "layers",
    "history",
    "restore",
    "feedback",
    "bug_report",
    "construction",
    "build",
    "support_agent",
    "face",
    "bolt",
    "auto_awesome",
    "diamond",
    "trophy",
    "celebrate",
    "cake",
    "gift",
    "shopping_bag",
    "store",
    "restaurant",
    "hotel",
    "directions_car",
    "directions_walk",
    "location_on",
    "map",
    "push_pin",
    "label",
    "tag",
    "flag",
    "filter_list",
    "sort",
    "save",
    "redo",
    "undo",
    "refresh",
    "replay",
    "zoom_in",
    "zoom_out",
    "open_in_new",
    "content_copy",
    "send",
    "reply",
    "forward",
    "archive",
    "mark_as_unread",
    "draft",
    "forum",
    "groups",
    "person_add",
    "manage_accounts",
    "restaurant_menu",
    "local_cafe",
    "medication",
    "fitness_center",
    "sports_esports",
    "school",
    "business",
    "house",
  ];

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="app-layout">
      <NavigationDrawer
        header={
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              className="material-symbols-rounded"
              style={{ color: "var(--md-sys-color-primary)", fontSize: "32px" }}
            >
              library_books
            </span>
            <h1
              style={{
                fontSize: "20px",
                color: "var(--md-sys-color-on-surface)",
              }}
            >
              MDS
            </h1>
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
            {
              icon: theme === "light" ? "dark_mode" : "light_mode",
              onClick: toggleTheme,
            },
            <Menu
              trigger={<IconButton icon="more_vert" />}
              items={[
                {
                  label: "Profile",
                  leadingIcon: "person",
                  onClick: () => alert("View Profile"),
                },
                {
                  label: "Settings",
                  leadingIcon: "settings",
                  onClick: () => alert("Settings"),
                },
                { label: "Help", leadingIcon: "help", trailingText: "F1" },
                { label: "Sign out", leadingIcon: "logout" },
              ]}
            />,
          ]}
        />

        <main className="main-content">
          <div
            className="content-body"
            style={{ maxWidth: "1600px", margin: "0 auto", width: "100%" }}
          >
            {activeTab === "overview" && (
              <div
                style={{
                  animation: "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                {/* Welcome Banner */}
                <div
                  className="overview-banner"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <h1
                      className="m3-display-medium"
                      style={{ fontWeight: 800, letterSpacing: "-1px" }}
                    >
                      {" "}
                      MRD Design System{" "}
                    </h1>
                    <p
                      className="m3-body-large"
                      style={{
                        opacity: 0.95,
                        marginTop: "8px",
                        maxWidth: "600px",
                      }}
                    >
                      Your Material 3 library is growing. All{" "}
                      <b>{TOTAL_COMPONENTS}</b> core components are verified and
                      ready for production deployment.
                    </p>
                    <div
                      style={{
                        marginTop: "32px",
                        display: "flex",
                        gap: "16px",
                      }}
                    >
                      <Button
                        variant="elevated"
                        style={{
                          background: "rgba(255,255,255,0.25)",
                          backdropFilter: "blur(10px)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.3)",
                          padding: "0 24px",
                        }}
                        onClick={() => setActiveTab("semantic")}
                      >
                        Explore Styles
                      </Button>
                    </div>
                  </div>
                  <span
                    className="material-symbols-rounded"
                    style={{
                      fontSize: "180px",
                      position: "absolute",
                      right: "-20px",
                      bottom: "-40px",
                      opacity: 0.15,
                      transform: "rotate(-10deg)",
                    }}
                  >
                    auto_awesome
                  </span>
                </div>

                {/* Component Overview Grid (Ant Design style) */}
                <div style={{ marginTop: "16px" }}>
                  {[
                    {
                      title: "General",
                      items: [
                        {
                          id: "semantic",
                          label: "Semantic Colors",
                          desc: "Hệ thống màu sắc v3",
                        },
                        {
                          id: "typography",
                          label: "Typography",
                          desc: "Quy chuẩn phông chữ",
                        },
                        {
                          id: "icons",
                          label: "Icon Library",
                          desc: "150+ Icons Rounded",
                        },
                      ],
                    },
                    {
                      title: "Layout",
                      items: [
                        {
                          id: "navigation",
                          label: "Navigation",
                          desc: "Drawer, Rail & Tabs",
                        },
                        {
                          id: "pagination",
                          label: "Pagination",
                          desc: "Phân trang dữ liệu",
                        },
                      ],
                    },
                    {
                      title: "Input",
                      items: [
                        {
                          id: "buttons",
                          label: "Buttons & FAB",
                          desc: "Nút bấm đa dụng",
                        },
                        {
                          id: "textfields",
                          label: "Inputs & Search",
                          desc: "Trường nhập dữ liệu",
                        },
                        {
                          id: "selection",
                          label: "Selection",
                          desc: "Checkbox, Radio, Switch",
                        },
                        {
                          id: "pickers",
                          label: "Pickers",
                          desc: "Date, Time, Icon Pickers",
                        },
                      ],
                    },
                    {
                      title: "Data",
                      items: [
                        {
                          id: "cards",
                          label: "Cards & Lists",
                          desc: "Hiển thị nội dung khối",
                        },
                        {
                          id: "chips",
                          label: "Chips & Badges",
                          desc: "Nhãn và trạng thái",
                        },
                        {
                          id: "tables",
                          label: "Tables",
                          desc: "Dữ liệu bảng biểu",
                        },
                      ],
                    },
                    {
                      title: "Feedback",
                      items: [
                        {
                          id: "alerts",
                          label: "Alerts & Banners",
                          desc: "Cảnh báo & thông tin",
                        },
                        {
                          id: "dialogs",
                          label: "Dialogs & Snack",
                          desc: "Cửa sổ & Thông báo",
                        },
                        {
                          id: "feedback",
                          label: "Progress & State",
                          desc: "Tiến trình & Trạng thái",
                        },
                      ],
                    },
                  ].map((cat, idx) => (
                    <div key={idx} style={{ marginBottom: "56px" }}>
                      <h2
                        className="m3-title-large"
                        style={{
                          fontWeight: 800,
                          marginBottom: "24px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {cat.title}
                        <span className="overview-category-badge">
                          {cat.items.length}
                        </span>
                      </h2>

                      <div className="overview-grid">
                        {cat.items.map((item, i) => (
                          <div
                            key={i}
                            className="overview-card"
                            onClick={() => {
                              setActiveTab(item.id);
                              window.scrollTo(0, 0);
                            }}
                          >
                            <div className="overview-card-header">
                              <div className="overview-card-title">
                                {item.label}
                              </div>
                            </div>
                            <div className="overview-card-preview">
                              <ComponentPreview id={item.id} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "semantic" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Semantic Colors</h1>
                  <p className="m3-body-large doc-intro">
                    Hệ thống màu sắc MDR dựa trên Material 3, sử dụng các biến
                    CSS để đảm bảo tính nhất quán và khả năng chuyển đổi theme
                    linh hoạt.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Mỗi màu sắc trong hệ thống đều mang một ý nghĩa ngữ nghĩa
                      (semantic) cụ thể:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🔵 <b>Primary:</b> Màu thương hiệu chính, dùng cho các
                        thành phần quan trọng.
                      </li>
                      <li>
                        🟢 <b>Success:</b> Dùng cho các thông báo thành công
                        hoặc trạng thái tích cực.
                      </li>
                      <li>
                        🟠 <b>Warning:</b> Dùng cho các cảnh báo cần sự chú ý
                        của người dùng.
                      </li>
                      <li>
                        🔴 <b>Error:</b> Dùng cho các lỗi hệ thống hoặc hành
                        động nguy hiểm.
                      </li>
                      <li>
                        ℹ️ <b>Info:</b> Dùng cho các thông tin bổ trợ, hướng
                        dẫn.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Core Palettes"
                      description="Các bảng màu chủ đạo và phản hồi của hệ thống."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              flexWrap: "wrap",
                            }}
                          >
                            <Button color="primary" variant="filled">
                              Primary
                            </Button>
                            <Button color="success" variant="filled">
                              Success
                            </Button>
                            <Button color="info" variant="filled">
                              Info
                            </Button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              flexWrap: "wrap",
                            }}
                          >
                            <Button color="warning" variant="filled">
                              Warning
                            </Button>
                            <Button color="error" variant="filled">
                              Error
                            </Button>
                          </div>
                        </div>
                      }
                      code={`<Button color="primary" variant="filled">Primary</Button>
<Button color="success" variant="filled">Success</Button>`}
                    />

                    <ExampleCard
                      title="Creative Variants"
                      description="Các biến thể màu sắc bổ sung cho nhu cầu trang trí hoặc phân loại nâng cao."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button color="indigo" variant="tonal">
                            Indigo
                          </Button>
                          <Button color="teal" variant="tonal">
                            Teal
                          </Button>
                          <Button color="rose" variant="tonal">
                            Rose
                          </Button>
                          <Button color="orange" variant="tonal">
                            Orange
                          </Button>
                        </div>
                      }
                      code={`<Button color="indigo" variant="tonal">Indigo</Button>`}
                    />

                    <ExampleCard
                      title="System M3 Palettes"
                      description="Các bảng màu Secondary và Tertiary theo đúng quy chuẩn Material 3."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button color="secondary" variant="filled">
                            Secondary
                          </Button>
                          <Button color="tertiary" variant="filled">
                            Tertiary
                          </Button>
                        </div>
                      }
                      code={`<Button color="secondary" variant="filled">Secondary</Button>`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Typography</h1>
                  <p className="m3-body-large doc-intro">
                    Hệ thống phông chữ MDR sử dụng Outfit cho tiêu đề và Roboto
                    cho nội dung, tuân thủ nghiêm ngặt các tỷ lệ của Material
                    Design 3.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Sử dụng các lớp Typography có sẵn để đảm bảo tính nhất
                      quán trên toàn bộ ứng dụng:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🖥️ <b>Display:</b> Dùng cho các con số hoặc tiêu đề cực
                        lớn trên màn hình rộng.
                      </li>
                      <li>
                        📰 <b>Headline:</b> Dùng cho các tiêu đề trang hoặc tiêu
                        đề phần quan trọng.
                      </li>
                      <li>
                        🏷️ <b>Title:</b> Dùng cho các tiêu đề trong card, dialog
                        hoặc các đề mục nhỏ.
                      </li>
                      <li>
                        📝 <b>Body:</b> Dùng cho nội dung văn bản chính, đảm bảo
                        khả năng đọc tốt nhất.
                      </li>
                      <li>
                        🏷️ <b>Label:</b> Dùng cho các nhãn nút, chú thích hoặc
                        các thành phần UI nhỏ.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Display & Headline"
                      description="Dành cho các thông tin quan trọng cần gây ấn tượng mạnh."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                          }}
                        >
                          <h1 className="m3-display-large">Display Large</h1>
                          <h2 className="m3-headline-medium">
                            Headline Medium
                          </h2>
                        </div>
                      }
                      code={`<h1 className="m3-display-large">Display Large</h1>
<h2 className="m3-headline-medium">Headline Medium</h2>`}
                    />

                    <ExampleCard
                      title="Title & Body"
                      description="Quy chuẩn cho nội dung văn bản và đề mục."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          <h3 className="m3-title-large">Title Large</h3>
                          <p className="m3-body-medium">
                            Đây là nội dung văn bản mẫu sử dụng Body Medium. Nó
                            được tối ưu hóa để người dùng có thể đọc một cách
                            hoàn toàn thoải mái.
                          </p>
                        </div>
                      }
                      code={`<h3 className="m3-title-large">Title Large</h3>
<p className="m3-body-medium">Body content...</p>`}
                    />

                    <ExampleCard
                      title="Specialized Styles"
                      description="Các phong cách chữ đặc biệt cho giao diện cao cấp."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                          }}
                        >
                          <h1 className="m3-display-large m3-specialized-display">
                            Premium
                          </h1>
                          <div className="m3-specialized-title">
                            Category Header
                          </div>
                        </div>
                      }
                      code={`<h1 className="m3-display-large m3-specialized-display">Premium</h1>
<div className="m3-specialized-title">Category</div>`}
                    />

                    <ExampleCard
                      title="Labels"
                      description="Dùng cho các nhãn, chú thích và nút bấm."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span className="m3-label-large">Large Label</span>
                          <span className="m3-label-small">Small Label</span>
                        </div>
                      }
                      code={`<span className="m3-label-large">Label</span>`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "icons" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Icon Library</h1>
                  <p className="m3-body-large doc-intro">
                    Hệ thống cung cấp hơn 150+ biểu tượng Material Symbols
                    Rounded, được tối ưu hóa cho hiển thị sắc nét ở mọi kích
                    thước.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Icon giúp người dùng nhận diện chức năng nhanh hơn mà
                      không cần đọc văn bản:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        ✨ <b>Nhất quán:</b> Luôn sử dụng biến thể "Rounded" để
                        phù hợp với ngôn ngữ thiết kế M3.
                      </li>
                      <li>
                        📏 <b>Kích thước:</b> Mặc định là 24px, sử dụng class
                        typography để điều chỉnh size.
                      </li>
                      <li>
                        🎨 <b>Màu sắc:</b> Icon tự động thừa hưởng màu chữ
                        (currentColor) của phần tử cha.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Icon Search & Preview</h2>
                  <div
                    style={{
                      background: "var(--md-sys-color-surface-container-high)",
                      padding: "24px",
                      borderRadius: "24px",
                      marginBottom: "32px",
                    }}
                  >
                    <SearchBar
                      placeholder="Search icons..."
                      value={iconSearch}
                      onChange={(e) => setIconSearch(e.target.value)}
                    />
                  </div>

                  <div className="icon-library-grid">
                    {ICON_DATABASE.filter((name) =>
                      name.includes(iconSearch.toLowerCase()),
                    ).map((icon) => (
                      <div
                        key={icon}
                        className="icon-card"
                        onClick={() => {
                          const tag = `<span className="material-symbols-rounded">${icon}</span>`;
                          navigator.clipboard.writeText(tag);
                          addToast(
                            "success",
                            "Copied Tag!",
                            `React snippet for "${icon}" copied.`,
                          );
                        }}
                      >
                        <span className="material-symbols-rounded">{icon}</span>
                        <span className="icon-name">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="doc-section when-to-use-section"
                  style={{ marginTop: "64px" }}
                >
                  <h2 className="doc-section-title">
                    🛡️ Offline Integration Guide
                  </h2>
                  <div
                    className="doc-content"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "40px",
                    }}
                  >
                    <div
                      className="doc-card"
                      style={{
                        padding: "24px",
                        background: "var(--md-sys-color-surface-container-low)",
                        borderRadius: "16px",
                      }}
                    >
                      <h4
                        className="m3-title-medium"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span className="material-symbols-rounded">
                          folder_zip
                        </span>
                        Tệp tin Font (.woff2)
                      </h4>
                      <p
                        className="m3-body-small"
                        style={{ marginTop: "12px", opacity: 0.8 }}
                      >
                        Dự án sử dụng tệp font{" "}
                        <code>MaterialSymbolsRounded.woff2</code> local giúp
                        tăng tốc độ tải trang và hoạt động không cần internet.
                      </p>
                    </div>

                    <div
                      className="doc-card"
                      style={{
                        padding: "24px",
                        background: "var(--md-sys-color-surface-container-low)",
                        borderRadius: "16px",
                      }}
                    >
                      <h4
                        className="m3-title-medium"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span className="material-symbols-rounded">css</span>
                        Cấu hình CSS
                      </h4>
                      <p
                        className="m3-body-small"
                        style={{ marginTop: "12px", opacity: 0.8 }}
                      >
                        Mã nguồn <code>@font-face</code> đã được định nghĩa sẵn
                        trong <code>index.css</code>. Bạn có thể dễ dàng di
                        chuyển sang bất kỳ dự án nào.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <Showcase
                  title="Carousel"
                  component={
                    <div style={{ maxWidth: "800px", width: "100%" }}>
                      <Carousel
                        images={[
                          "https://picsum.photos/seed/m3_1/800/450",
                          "https://picsum.photos/seed/m3_2/800/450",
                          "https://picsum.photos/seed/m3_3/800/450",
                        ]}
                      />
                    </div>
                  }
                  code={`<Carousel images={['url1', 'url2', 'url3']} />`}
                />

                <Showcase
                  title="Images & Specialized Shapes"
                  component={
                    <div
                      style={{
                        display: "flex",
                        gap: "32px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <img
                          className="m3-img"
                          src="https://picsum.photos/seed/standard/200/200"
                          alt="M3"
                          style={{ width: "200px", height: "200px" }}
                        />
                        <div
                          className="m3-label-medium"
                          style={{ marginTop: "12px" }}
                        >
                          Round Corners (16dp)
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img
                          className="m3-img m3-img-circle"
                          src="https://picsum.photos/seed/circle/200/200"
                          alt="Circle"
                          style={{ width: "200px", height: "200px" }}
                        />
                        <div
                          className="m3-label-medium"
                          style={{ marginTop: "12px" }}
                        >
                          Avatar Circle
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img
                          className="m3-img m3-img-tonal"
                          src="https://picsum.photos/seed/tonal/200/200"
                          alt="Tonal"
                          style={{ width: "200px", height: "200px" }}
                        />
                        <div
                          className="m3-label-medium"
                          style={{ marginTop: "12px" }}
                        >
                          Tonal Utility Filter
                        </div>
                      </div>
                    </div>
                  }
                  code={`<img className="m3-img" src="..." />
<img className="m3-img m3-img-circle" src="..." />
<img className="m3-img m3-img-tonal" src="..." />`}
                />

                <Showcase
                  title="Icon Gallery"
                  component={
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {CORE_ICONS.map((icon) => (
                        <div
                          key={icon}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            background: "var(--md-sys-color-surface-container)",
                            borderRadius: "100px",
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                          }}
                        >
                          <span
                            className="material-symbols-rounded"
                            style={{
                              fontSize: "20px",
                              color: "var(--md-sys-color-primary)",
                            }}
                          >
                            {icon}
                          </span>
                          <span
                            className="m3-label-medium"
                            style={{ fontWeight: 500 }}
                          >
                            {icon}
                          </span>
                        </div>
                      ))}
                    </div>
                  }
                  code={
                    `<span className="material-symbols-rounded">home</span>` +
                    "\n" +
                    `<span className="material-symbols-rounded">search</span>` +
                    "\n" +
                    `<span className="material-symbols-rounded">settings</span>`
                  }
                />
              </div>
            )}

            {activeTab === "buttons" && (
              <div className="component-doc-page">
                {/* Introduction Section */}
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Button</h1>
                  <p className="m3-body-large doc-intro">
                    Nút bấm giúp người dùng thực hiện các hành động chỉ với một
                    lần chạm. Material 3 cung cấp nhiều kiểu dáng để phân cấp
                    mức độ ưu tiên của hành động.
                  </p>
                </div>

                {/* When To Use Section */}
                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p
                      className="m3-body-medium"
                      style={{ marginBottom: "16px" }}
                    >
                      Sử dụng nút bấm để kích hoạt các hành động logic, gửi
                      form, hoặc chuyển hướng người dùng. Trong MDR Design
                      System chúng tôi cung cấp 5 loại nút chính:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🔵 <b>Primary button:</b> Dùng cho hành động quan trọng
                        nhất (call to action). Chỉ nên có 1 nút chính trong 1
                        khu vực.
                      </li>
                      <li>
                        ⚪ <b>Default/Tonal button:</b> Dùng cho các hành động
                        có mức độ ưu tiên trung bình.
                      </li>
                      <li>
                        🖼️ <b>Outlined button:</b> Dùng cho các hành động phụ,
                        ít quan trọng hơn.
                      </li>
                      <li>
                        ☁️ <b>Elevated button:</b> Dùng khi cần làm nổi bật trên
                        nền giao diện phức tạp.
                      </li>
                      <li>
                        📄 <b>Text button:</b> Dùng cho các hành động ít quan
                        trọng nhất như "Hủy" hoặc "Xem thêm".
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Examples Section */}
                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>

                  <div className="examples-container">
                    <ExampleCard
                      title="Basic Types"
                      description="Năm loại nút cơ bản với độ nhấn (emphasis) khác nhau từ cao xuống thấp."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button variant="filled">Filled (Primary)</Button>
                          <Button variant="tonal">Tonal</Button>
                          <Button variant="outlined">Outlined</Button>
                          <Button variant="elevated">Elevated</Button>
                          <Button variant="text">Text</Button>
                        </div>
                      }
                      code={`<Button variant="filled">Filled</Button>
<Button variant="tonal">Tonal</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="elevated">Elevated</Button>
<Button variant="text">Text</Button>`}
                    />

                    <ExampleCard
                      title="Floating Action Button (FAB)"
                      description="Dùng cho các hành động chính, nổi bật hẵn trên giao diện. FAB có nhiều kích thước khác nhau."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            alignItems: "center",
                          }}
                        >
                          <FAB icon="add" size="small" />
                          <FAB icon="edit" />
                          <FAB icon="share" size="large" />
                          <FAB icon="palette" label="Extended FAB" />
                        </div>
                      }
                      code={`<FAB icon="add" size="small" />
<FAB icon="edit" />
<FAB icon="share" size="large" />
<FAB icon="palette" label="Extended FAB" />`}
                    />

                    <ExampleCard
                      title="Menu Dropdown"
                      description="Tích hợp menu xổ xuống ngay từ nút bấm để lựa chọn nhanh hành động."
                      component={
                        <div style={{ display: "flex", gap: "20px" }}>
                          <Menu
                            trigger={
                              <Button variant="tonal">Options Menu</Button>
                            }
                            items={[
                              { label: "Sửa", leadingIcon: "edit" },
                              {
                                label: "Sao chép",
                                leadingIcon: "content_copy",
                              },
                              { label: "Chia sẻ", leadingIcon: "share" },
                              {
                                label: "Xóa",
                                leadingIcon: "delete",
                                color: "error",
                              },
                            ]}
                          />
                          <Menu
                            trigger={
                              <IconButton
                                icon="more_horiz"
                                variant="outlined"
                              />
                            }
                            items={[
                              { label: "Lưu trữ", leadingIcon: "archive" },
                              {
                                label: "Tắt thông báo",
                                leadingIcon: "volume_off",
                              },
                            ]}
                          />
                        </div>
                      }
                      code={`<Menu 
  trigger={<Button variant="tonal">Open</Button>} 
  items={[
    { label: 'Edit', leadingIcon: 'edit' },
    { label: 'Delete', leadingIcon: 'delete' },
  ]} 
/>`}
                    />

                    <ExampleCard
                      title="Segmented Button"
                      description="Dùng để chọn 1 trong nhiều phương án liên quan đến nhau (thay thế RadioGroup trong một số trường hợp)."
                      component={
                        <SegmentedButton
                          selectedId={selectedSegment}
                          onChange={setSelectedSegment}
                          options={[
                            { id: "day", label: "Ngày" },
                            { id: "week", label: "Tuần" },
                            { id: "month", label: "Tháng" },
                          ]}
                        />
                      }
                      code={`<SegmentedButton 
  selectedId={value} 
  onChange={setValue} 
  options={[
    {id:'day', label:'Day'}, 
    {id:'week', label:'Week'}
  ]} 
/>`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "textfields" && (
              <div className="component-doc-page">
                {/* Introduction Section */}
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Inputs & Search</h1>
                  <p className="m3-body-large doc-intro">
                    Trường nhập liệu cho phép người dùng nhập và chỉnh sửa văn
                    bản. Chúng thường xuất hiện trong các biểu mẫu và hộp thoại.
                  </p>
                </div>

                {/* When To Use Section */}
                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Sử dụng <b>TextField</b> khi bạn cần người dùng cung cấp
                      thông tin văn bản tự do. Sử dụng <b>SearchBar</b> cho các
                      chức năng tìm kiếm dữ liệu. Sử dụng <b>Select</b> khi
                      người dùng cần chọn một hoặc nhiều tùy chọn từ danh sách
                      có sẵn (thay vì nhập liệu tự do).
                    </p>
                  </div>
                </div>

                {/* Examples Section */}
                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>

                  <div className="examples-container">
                    <ExampleCard
                      title="Search Bar"
                      description="Thanh tìm kiếm tiêu chuẩn với icon và hiệu ứng focus."
                      component={
                        <div style={{ width: "100%", maxWidth: "400px" }}>
                          <SearchBar
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                          />
                        </div>
                      }
                      code={`<SearchBar 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>`}
                    />

                    <ExampleCard
                      title="Basic TextFields"
                      description="Các dạng nhập liệu cơ bản bao gồm nhập mật khẩu và hiển thị trạng thái lỗi."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            width: "100%",
                            maxWidth: "400px",
                          }}
                        >
                          <TextField
                            label="Họ và tên"
                            icon="person"
                            placeholder="Nhập tên của bạn"
                          />
                          <TextField
                            label="Mật khẩu"
                            icon="lock"
                            type="password"
                          />
                          <TextField
                            label="Trạng thái lỗi"
                            error
                            helperText="Trường này là bắt buộc"
                            icon="error"
                          />
                        </div>
                      }
                      code={`<TextField label="Name" icon="person" />
<TextField label="Password" type="password" />
<TextField error helperText="Required" />`}
                    />

                    <ExampleCard
                      title="Select (Dropdown)"
                      description="Lựa chọn một giá trị duy nhất từ danh sách tùy chọn."
                      component={
                        <div style={{ width: "100%", maxWidth: "400px" }}>
                          <Select
                            label="Chọn Framework"
                            value={selectValue}
                            onChange={setSelectValue}
                            options={[
                              { value: "react", label: "React.js" },
                              { value: "vue", label: "Vue.js" },
                              { value: "angular", label: "Angular" },
                              { value: "svelte", label: "Svelte" },
                            ]}
                          />
                        </div>
                      }
                      code={`<Select 
  label="Framework" 
  options={[{value:'react', label:'React'}]} 
  value={val} 
  onChange={setVal} 
/>`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "selection" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Selection Controls</h1>
                  <p className="m3-body-large doc-intro">
                    Các thành phần cho phép người dùng thực hiện lựa chọn,
                    bật/tắt trạng thái hoặc điều chỉnh các giá trị định lượng.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Chọn đúng thành phần dựa trên số lượng tùy chọn và bản
                      chất của lựa chọn:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🔘 <b>Radio Group:</b> Dùng khi người dùng chỉ được chọn
                        DUY NHẤT một tùy chọn trong một danh sách.
                      </li>
                      <li>
                        ☑️ <b>Checkbox:</b> Dùng khi người dùng có thể chọn một
                        hoặc nhiều tùy chọn, hoặc xác nhận một điều khoản.
                      </li>
                      <li>
                        🔛 <b>Switch:</b> Dùng để bật hoặc tắt một trạng thái hệ
                        thống ngay lập tức (ví dụ: Dark mode, Wifi).
                      </li>
                      <li>
                        🎚️ <b>Slider:</b> Dùng để điều chỉnh các giá trị trong
                        một khoảng xác định (âm lượng, độ sáng).
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Binary States"
                      description="Sử dụng Switch và Checkbox cho các lựa chọn nhị phân."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <Switch
                              checked={switchState}
                              onChange={() => setSwitchState(!switchState)}
                            />
                            <span className="m3-body-medium">
                              Hệ thống đang {switchState ? "Bật" : "Tắt"}
                            </span>
                          </div>
                          <Checkbox
                            label="Tôi đồng ý với các điều khoản dịch vụ"
                            checked={checkState}
                            onChange={() => setCheckState(!checkState)}
                          />
                        </div>
                      }
                      code={`<Switch checked={checked} onChange={onChange} />
<Checkbox label="Terms" checked={checked} onChange={onChange} />`}
                    />

                    <ExampleCard
                      title="Radio Group"
                      description="Lựa chọn duy nhất từ một danh sách các options."
                      component={
                        <RadioGroup
                          value={radioValue}
                          onChange={setRadioValue}
                          options={[
                            { value: "opt1", label: "Tiêu chuẩn (Standard)" },
                            { value: "opt2", label: "Nâng cao (Advanced)" },
                            { value: "opt3", label: "Chuyên gia (Pro)" },
                          ]}
                        />
                      }
                      code={`<RadioGroup 
  value={value} 
  options={[{value:'opt1', label:'Option 1'}]} 
/>`}
                    />

                    <ExampleCard
                      title="Range Selection"
                      description="Điều chỉnh giá trị định lượng một cách trực quan."
                      component={
                        <div style={{ width: "100%", maxWidth: "300px" }}>
                          <Slider
                            value={sliderValue}
                            onChange={(e) => setSliderValue(e.target.value)}
                          />
                          <div
                            className="m3-body-small"
                            style={{ marginTop: "8px", opacity: 0.7 }}
                          >
                            Giá trị hiện tại: <b>{sliderValue}%</b>
                          </div>
                        </div>
                      }
                      code={`<Slider value={value} onChange={onChange} />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pickers" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
              >
                <Showcase
                  title="Icon Picker"
                  component={
                    <div style={{ width: "100%", maxWidth: "400px" }}>
                      <IconPicker
                        label="Selected Icon"
                        value={iconValue}
                        onChange={setIconValue}
                      />
                      <div
                        style={{
                          marginTop: "24px",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          padding: "16px",
                          background: "var(--md-sys-color-primary-container)",
                          borderRadius: "12px",
                          color: "var(--md-sys-color-on-primary-container)",
                        }}
                      >
                        <span
                          className="material-symbols-rounded"
                          style={{ fontSize: "48px" }}
                        >
                          {iconValue}
                        </span>
                        <div>
                          <div className="m3-label-medium">SELECTED ICON</div>
                          <div
                            className="m3-headline-small"
                            style={{ textTransform: "capitalize" }}
                          >
                            {iconValue}
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  code={`<IconPicker 
  label="Select Icon" 
  value={value} 
  onChange={setValue} 
/>`}
                />
              </div>
            )}

            {activeTab === "navigation" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Navigation</h1>
                  <p className="m3-body-large doc-intro">
                    Hệ thống điều hướng giúp người dùng di chuyển giữa các khu
                    vực khác nhau trong ứng dụng một cách liền mạch.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Việc lựa chọn kiểu điều hướng phụ thuộc vào cấu trúc thông
                      tin và kích thước màn hình:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        📑 <b>Tabs:</b> Dùng để phân chia nội dung cùng cấp
                        trong một view.
                      </li>
                      <li>
                        📱 <b>Bottom Navigation:</b> Dùng cho các điểm đến chính
                        trên thiết bị di động (3-5 mục).
                      </li>
                      <li>
                        🖥️ <b>Navigation Rail:</b> Dùng cho các điểm đến chính
                        trên Tablet/Desktop (3-7 mục).
                      </li>
                      <li>
                        📁 <b>Navigation Drawer:</b> Dùng cho các điểm đến phụ
                        hoặc khi có quá nhiều mục điều hướng.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "24px",
                    }}
                  >
                    <ExampleCard
                      title="Tabs"
                      description="Chuyển đổi giữa các nhóm nội dung liên quan."
                      component={
                        <div
                          style={{
                            width: "100%",
                            borderRadius: "12px",
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                            overflow: "hidden",
                          }}
                        >
                          <Tabs
                            activeTab={activeTabId}
                            onChange={setActiveTabId}
                            tabs={[
                              {
                                id: "tab1",
                                label: "Overview",
                                icon: "dashboard",
                              },
                              {
                                id: "tab2",
                                label: "Settings",
                                icon: "settings",
                              },
                            ]}
                          />
                          <div
                            style={{
                              padding: "40px",
                              textAlign: "center",
                              background: "var(--md-sys-color-surface)",
                            }}
                          >
                            Selected: {activeTabId}
                          </div>
                        </div>
                      }
                      code={`<Tabs activeTab={id} onChange={setId} tabs={[{id:'1', label:'Home'}]} />`}
                    />

                    <ExampleCard
                      title="Bottom Navigation"
                      description="Thanh điều hướng cố định ở cuối màn hình mobile."
                      component={
                        <div
                          style={{
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                            borderRadius: "12px",
                            overflow: "hidden",
                          }}
                        >
                          <NavigationBar
                            activeId={navActiveId}
                            onChange={setNavActiveId}
                            items={[
                              { id: "home", label: "Home", icon: "home" },
                              {
                                id: "notif",
                                label: "Alerts",
                                icon: "notifications",
                                badge: true,
                              },
                              { id: "profile", label: "User", icon: "person" },
                            ]}
                          />
                        </div>
                      }
                      code={`<NavigationBar items={items} activeId={id} onChange={setId} />`}
                    />

                    <ExampleCard
                      title="Navigation Rail"
                      description="Thon gọn, tiết kiệm không gian cho màn hình lớn."
                      component={
                        <div
                          style={{
                            height: "300px",
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                            borderRadius: "12px",
                            display: "flex",
                            overflow: "hidden",
                          }}
                        >
                          <NavigationRail
                            items={menuItems.slice(0, 3)}
                            activeId={railActiveId}
                            onChange={setRailActiveId}
                            fab={<FAB icon="edit" size="small" />}
                          />
                          <div
                            style={{
                              flex: 1,
                              padding: "20px",
                              background: "var(--md-sys-color-surface)",
                            }}
                          >
                            Content View
                          </div>
                        </div>
                      }
                      code={`<NavigationRail items={items} activeId={id} onChange={setId} />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "chips" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Data Display & Labels</h1>
                  <p className="m3-body-large doc-intro">
                    Các thành phần nhỏ dùng để hiển thị trạng thái, thuộc tính,
                    hoặc định danh người dùng một cách súc tích.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Sử dụng các thành phần này để làm nổi bật thông tin mà
                      không làm gián đoạn luồng trải nghiệm:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🏷️ <b>Chips:</b> Dùng cho các thẻ nhập liệu, bộ lọc hoặc
                        các lựa chọn nhanh.
                      </li>
                      <li>
                        🔴 <b>Badges:</b> Dùng để thông báo số lượng tin nhắn,
                        cập nhật hoặc trạng thái mới.
                      </li>
                      <li>
                        👤 <b>Avatars:</b> Dùng để đại diện cho người dùng thông
                        qua hình ảnh hoặc tên viết tắt.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Chips"
                      description="Hỗ trợ nhiều biến thể cho các mục đích khác nhau."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Chip label="Filter" icon="check" selected />
                          <Chip
                            label="Delete me"
                            onDelete={() => alert("Deleted")}
                          />
                          <Chip label="With Icon" icon="event" />
                        </div>
                      }
                      code={`<Chip label="Tag" selected icon="check" />`}
                    />
                    <ExampleCard
                      title="Badges"
                      description="Gắn vào icon hoặc text để hiển thị số lượng thông báo."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "32px",
                            alignItems: "center",
                          }}
                        >
                          <Badge content="99+">
                            <IconButton icon="notifications" variant="tonal" />
                          </Badge>
                          <Badge variant="small">
                            <span className="material-symbols-rounded">
                              mail
                            </span>
                          </Badge>
                        </div>
                      }
                      code={`<Badge content="5"><Icon /></Badge>`}
                    />

                    <ExampleCard
                      title="Avatars"
                      description="Hình ảnh đại diện người dùng với nhiều kích thước."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            alignItems: "center",
                          }}
                        >
                          <Avatar src="https://i.pravatar.cc/150?u=1" />
                          <Avatar>JD</Avatar>
                          <Avatar
                            size={56}
                            src="https://i.pravatar.cc/150?u=3"
                          />
                        </div>
                      }
                      code={`<Avatar src="..." />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cards" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Cards & Lists</h1>
                  <p className="m3-body-large doc-intro">
                    Các thành phần dùng để chứa và tổ chức nội dung một cách có
                    cấu trúc, giúp giao diện trở nên gọn gàng và dễ quét thông
                    tin.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Sử dụng các thành phần chứa (Container) để phân tách các
                      khối nội dung khác nhau:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🗂️ <b>Cards:</b> Một entry point cho thông tin chi tiết
                        (ảnh, text, actions). Dùng cho dashboards hoặc news
                        feeds.
                      </li>
                      <li>
                        📜 <b>Lists:</b> Hiển thị nhiều mục thông tin liên tục.
                        Dùng cho cài đặt, danh bạ hoặc menu.
                      </li>
                      <li>
                        📑 <b>Accordion:</b> Cho phép ẩn/hiện nội dung để tiết
                        kiệm diện tích màn hình.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Cards"
                      description="Có 3 loại chính: Elevated (Nổi), Outlined (Viền), và Filled (Đầy)."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Card style={{ width: "260px" }}>
                            <h3 className="m3-title-medium">Elevated</h3>
                            <p className="m3-body-small">
                              Dùng để làm nổi bật nội dung chính.
                            </p>
                            <Button variant="text">Action</Button>
                          </Card>
                          <Card variant="outlined" style={{ width: "260px" }}>
                            <h3 className="m3-title-medium">Outlined</h3>
                            <p className="m3-body-small">
                              Dùng cho các mục có độ ưu tiên thấp hơn.
                            </p>
                          </Card>
                        </div>
                      }
                      code={`<Card>...</Card>\n<Card variant="outlined">...</Card>`}
                    />

                    <ExampleCard
                      title="Interactive Lists"
                      description="Danh sách các mục có thể click và có icon điều hướng."
                      component={
                        <div
                          style={{
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                            borderRadius: "12px",
                            overflow: "hidden",
                          }}
                        >
                          <List>
                            <ListItem
                              headline="Account"
                              supportingText="Privacy and security"
                              leadingIcon="person"
                              trailingIcon="chevron_right"
                            />
                            <Divider />
                            <ListItem
                              headline="Notifications"
                              leadingIcon="notifications"
                              trailingIcon="chevron_right"
                            />
                          </List>
                        </div>
                      }
                      code={`<List><ListItem headline="Title" /></List>`}
                    />

                    <ExampleCard
                      title="Accordion"
                      description="Tổ chức nội dung phân cấp, ẩn bớt thông tin chi tiết."
                      component={
                        <Accordion
                          items={[
                            {
                              title: "Technical Details",
                              content: "React, M3, Framer Motion.",
                            },
                            {
                              title: "Usage Guide",
                              content: "Import and use components directly.",
                            },
                          ]}
                        />
                      }
                      code={`<Accordion items={[{title:'Header', content:'Body'}]} />`}
                    />

                    <ExampleCard
                      title="Empty States"
                      description="Hiển thị khi không có dữ liệu để hướng dẫn người dùng."
                      component={
                        <div
                          style={{
                            width: "100%",
                            border: "1px dashed var(--md-sys-color-outline)",
                            borderRadius: "12px",
                            background:
                              "var(--md-sys-color-surface-container-low)",
                          }}
                        >
                          <EmptyState
                            icon="folder_off"
                            title="No Data"
                            description="Start by adding items."
                            action={<Button variant="filled">Add Item</Button>}
                          />
                        </div>
                      }
                      code={`<EmptyState icon="folder_off" title="..." />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tables" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Data Tables</h1>
                  <p className="m3-body-large doc-intro">
                    Bảng dữ liệu giúp hiển thị các tập hợp thông tin lớn một
                    cách có tổ chức, cho phép người dùng so sánh và phân tích dữ
                    liệu hiệu quả.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">Sử dụng Bảng khi:</p>
                    <ul className="m3-body-medium">
                      <li>
                        📊 Cần hiển thị nhiều cột thông tin cho mỗi mục dữ liệu.
                      </li>
                      <li>
                        🔍 Người dùng cần thực hiện các hành động như lọc, sắp
                        xếp hoặc tìm kiếm trên tập dữ liệu.
                      </li>
                      <li>
                        📑 Cần so sánh các giá trị giữa các hàng khác nhau.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "24px",
                    }}
                  >
                    <ExampleCard
                      title="Data Grid"
                      description="Hỗ trợ render custom cho từng cell và responsive layout."
                      component={
                        <div
                          style={{
                            width: "100%",
                            overflowX: "auto",
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                            borderRadius: "12px",
                          }}
                        >
                          <Table
                            columns={[
                              { key: "id", title: "ID", width: "80px" },
                              {
                                key: "user",
                                title: "User",
                                render: (val, row) => (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "12px",
                                    }}
                                  >
                                    <Avatar src={row.avatar} size={28} />
                                    <span>{val}</span>
                                  </div>
                                ),
                              },
                              {
                                key: "status",
                                title: "Status",
                                render: (val) => (
                                  <span
                                    style={{
                                      color:
                                        val === "Active"
                                          ? "var(--md-sys-color-success)"
                                          : "inherit",
                                    }}
                                  >
                                    {val}
                                  </span>
                                ),
                              },
                            ]}
                            data={[
                              {
                                id: "#1",
                                user: "John Doe",
                                avatar: "https://i.pravatar.cc/150?u=1",
                                status: "Active",
                              },
                              {
                                id: "#2",
                                user: "Jane Smith",
                                avatar: "https://i.pravatar.cc/150?u=2",
                                status: "Inactive",
                              },
                            ]}
                          />
                        </div>
                      }
                      code={`<Table columns={cols} data={data} />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Feedback Indicators</h1>
                  <p className="m3-body-large doc-intro">
                    Thông báo cho người dùng về trạng thái của các tiến trình
                    đang diễn ra trong hệ thống.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Giảm bớt sự lo lắng của người dùng bằng cách hiển thị
                      trạng thái xử lý:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        📉 <b>Linear Progress:</b> Dùng cho các tiến trình chiếm
                        không gian ngang (như tải file).
                      </li>
                      <li>
                        🔄 <b>Circular Progress:</b> Dùng cho các hành động cần
                        chờ đợi tại chỗ (như loading trang).
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "24px",
                    }}
                  >
                    <ExampleCard
                      title="Progress Patterns"
                      description="Hiển thị tiến độ hoàn thành từ 0% đến 100%."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "32px",
                            width: "100%",
                          }}
                        >
                          <ProgressBar value={progress} />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <ProgressBar variant="circular" value={progress} />
                            <span className="m3-body-medium">
                              Đang xử lý... {progress}%
                            </span>
                          </div>
                        </div>
                      }
                      code={`<ProgressBar value={${progress}} />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dialogs" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Dialogs & Overlays</h1>
                  <p className="m3-body-large doc-intro">
                    Các thành phần hiển thị trên lớp bề mặt hiện tại để thu hút
                    sự chú ý của người dùng hoặc cung cấp nội dung bổ sung.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Sử dụng các lớp phủ dựa trên mức độ quan trọng của công
                      việc:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        💬 <b>Dialog:</b> Khi cần người dùng đưa ra quyết định
                        hoặc nhập thông tin quan trọng.
                      </li>
                      <li>
                        📑 <b>Side/Bottom Sheet:</b> Khi hiển thị thông tin bổ
                        sung hoặc hành động phụ mà không làm mất ngữ cảnh trang
                        chính.
                      </li>
                      <li>
                        🔔 <b>Snackbar:</b> Thông báo ngắn gọn về kết quả của
                        một hành động.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Modal & Sheets"
                      description="Các kiểu hiển thị lớp phủ khác nhau tùy vào thiết bị và mục đích."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button
                            variant="filled"
                            onClick={() => setIsDialogOpen(true)}
                          >
                            Open Dialog
                          </Button>
                          <Button
                            variant="tonal"
                            onClick={() => setIsSideSheetOpen(true)}
                          >
                            Side Sheet
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => setIsBottomSheetOpen(true)}
                          >
                            Bottom Sheet
                          </Button>
                        </div>
                      }
                      code={`<Dialog isOpen={...} />\n<SideSheet isOpen={...} />`}
                    />

                    <ExampleCard
                      title="Notifications"
                      description="Thông báo nhanh (Toast/Snackbar) về kết quả hoạt động."
                      component={
                        <Button
                          variant="tonal"
                          onClick={() => setSnackOpen(true)}
                        >
                          Show Snackbar
                        </Button>
                      }
                      code={`<Snackbar message="..." />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Alerts & Banners</h1>
                  <p className="m3-body-large doc-intro">
                    Cung cấp các thông điệp quan trọng về trạng thái hệ thống
                    hoặc kết quả hành động của người dùng.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Lựa chọn kiểu thông báo phù hợp với độ khẩn cấp:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        🚀 <b>Toasts:</b> Các thông báo nổi (Global) tự biến mất
                        sau 3-5 giây. Dùng cho kết quả thành công/thất bại.
                      </li>
                      <li>
                        ⚠️ <b>Banners:</b> Thông báo in-line trong trang. Dùng
                        cho các vấn đề hệ thống cần người dùng xử lý ngay.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Global Notifications"
                      description="Hệ thống Toast thông báo trạng thái hoạt động."
                      component={
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <Button
                            className="m3-btn-success"
                            onClick={() =>
                              addToast("success", "Success", "Data saved.")
                            }
                          >
                            Success
                          </Button>
                          <Button
                            className="m3-btn-error"
                            onClick={() =>
                              addToast("error", "Error", "Action failed.")
                            }
                          >
                            Error
                          </Button>
                        </div>
                      }
                      code={`addToast('success', 'Title', 'Message')`}
                    />
                    <ExampleCard
                      title="Contextual Banners"
                      description="Thông báo nằm trong luồng nội dung của trang."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            width: "100%",
                          }}
                        >
                          <Alert title="Privacy Policy" variant="info">
                            We updated our terms of service.
                          </Alert>
                          <Alert title="Storage Full" variant="warning">
                            Your cloud storage is almost full.
                          </Alert>
                        </div>
                      }
                      code={`<Alert variant="warning" title="..." />`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pagination" && (
              <div className="component-doc-page">
                <div className="doc-section hero-section">
                  <h1 className="m3-display-small">Pagination</h1>
                  <p className="m3-body-large doc-intro">
                    Chia nhỏ danh sách dữ liệu dài thành các trang để cải thiện
                    hiệu suất và trải nghiệm người dùng.
                  </p>
                </div>

                <div className="doc-section when-to-use-section">
                  <h2 className="doc-section-title"># When To Use</h2>
                  <div className="doc-content">
                    <p className="m3-body-medium">
                      Phân trang là cần thiết khi số lượng mục dữ liệu vượt quá
                      khả năng quét nhanh của người dùng:
                    </p>
                    <ul className="m3-body-medium">
                      <li>
                        📄 Khi có hơn 20-50 mục trong danh sách hoặc bảng.
                      </li>
                      <li>
                        ⚡ Khi việc tải toàn bộ dữ liệu cùng lúc gây chậm hệ
                        thống.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="doc-section examples-section">
                  <h2 className="doc-section-title">Examples</h2>
                  <div className="examples-container">
                    <ExampleCard
                      title="Standard Pagination"
                      description="Điều hướng giữa các trang với thông báo vị trí hiện tại."
                      component={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "24px",
                          }}
                        >
                          <Pagination
                            totalPages={10}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                          />
                          <span className="m3-label-medium">
                            Trang {currentPage} / 10
                          </span>
                        </div>
                      }
                      code={`<Pagination totalPages={10} currentPage={page} onPageChange={setPage} />`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Global Overlays */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Basic Dialog"
        actions={
          <>
            <Button variant="text" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="filled" onClick={() => setIsDialogOpen(false)}>
              Apply
            </Button>
          </>
        }
      >
        This is a standard Material 3 dialog. It uses a centered surface to
        focus user attention on a critical task or information.
      </Dialog>

      <SideSheet
        isOpen={isSideSheetOpen}
        onClose={() => setIsSideSheetOpen(false)}
        title="Settings Panel"
        actions={
          <>
            <Button variant="text" onClick={() => setIsSideSheetOpen(false)}>
              Reset
            </Button>
            <Button variant="filled" onClick={() => setIsSideSheetOpen(false)}>
              Save
            </Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p className="m3-body-medium">
            Side sheets are used to present supplementary content that supports
            the main content of a page.
          </p>
          <TextField label="Configuration Name" />
          <Switch
            label="Enable Notifications"
            checked={switchState}
            onChange={setSwitchState}
          />
        </div>
      </SideSheet>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title="Quick Actions"
      >
        <div style={{ padding: "16px" }}>
          <List>
            <ListItem headline="Share link" leadingIcon="share" />
            <ListItem headline="Get link" leadingIcon="link" />
            <ListItem headline="Edit name" leadingIcon="edit" />
            <ListItem headline="Delete" leadingIcon="delete" />
          </List>
        </div>
      </BottomSheet>

      <Snackbar
        isOpen={snackOpen}
        message="This is a Material 3 Toast Notification"
        actionLabel="Undo"
        onAction={() => setSnackOpen(false)}
        onClose={() => setSnackOpen(false)}
      />

      {/* Toast System (Alerts as Toasts) */}
      <div className="m3-toast-container">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              layout
            >
              <Alert
                variant={toast.type}
                title={toast.title}
                onClose={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
              >
                {toast.message}
              </Alert>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
