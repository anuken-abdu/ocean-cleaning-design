/* @ds-bundle: {"format":3,"namespace":"OceanCleaningDesignSystem_f89970","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ContactCard","sourcePath":"components/marketing/ContactCard.jsx"},{"name":"DashedCallout","sourcePath":"components/marketing/DashedCallout.jsx"},{"name":"FeatureCheck","sourcePath":"components/marketing/FeatureCheck.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceBadge","sourcePath":"components/marketing/ServiceBadge.jsx"},{"name":"WaveDivider","sourcePath":"components/marketing/WaveDivider.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"5ec6ff100d23","components/core/Button.jsx":"2158bb9fa14f","components/core/Icon.jsx":"fea4ef51494a","components/marketing/ContactCard.jsx":"0cd9a36bc1e9","components/marketing/DashedCallout.jsx":"52408fa0a862","components/marketing/FeatureCheck.jsx":"0f3319544790","components/marketing/SectionHeading.jsx":"e7c2ab971a44","components/marketing/ServiceBadge.jsx":"5a56d15b3be5","components/marketing/WaveDivider.jsx":"e90146ca6dc1","ui_kits/landing/Sections.jsx":"d915b76766e7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OceanCleaningDesignSystem_f89970 = window.OceanCleaningDesignSystem_f89970 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Logo — the Ocean Cleaning mark: a round ocean-wave badge with seagull
 * silhouettes. Optional wordmark lockup to the right.
 * NOTE: placeholder mark — replace assets/logo.svg with the real brand file.
 */
function Logo({
  size = 64,
  showWordmark = false,
  wordmarkColor = "var(--text-strong)",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `oc-logo ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "14px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 160 160",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-label": "Ocean Cleaning",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: `oc-circle-${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "72"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "76",
    fill: "var(--ocean-600)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "80",
    r: "72",
    fill: "var(--ocean-50)"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#oc-circle-${size})`
  }, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "8",
    width: "144",
    height: "144",
    fill: "var(--ocean-50)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 104 C 28 86, 52 122, 80 104 C 108 86, 132 122, 160 104 L160 160 L0 160 Z",
    fill: "var(--ocean-400)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 120 C 30 102, 54 138, 82 120 C 110 102, 134 138, 160 120 L160 160 L0 160 Z",
    fill: "var(--ocean-500)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 136 C 30 120, 56 152, 84 136 C 112 120, 136 152, 160 136 L160 160 L0 160 Z",
    fill: "var(--ocean-600)"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--ocean-800)",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M58 56 C 64 49, 68 49, 72 55 C 76 49, 80 49, 86 56"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 44 C 92 39, 95 39, 98 43 C 101 39, 104 39, 108 44"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 46 C 47 42, 50 42, 53 45 C 56 42, 59 42, 62 46"
  }))), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extra)",
      fontSize: size * 0.34,
      color: wordmarkColor,
      letterSpacing: "-0.01em"
    }
  }, "Ocean"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size * 0.205,
      color: "var(--color-primary)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Cleaning")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper around Lucide line icons (the brand's only icon system).
 * Requires the Lucide UMD script on the page:
 *   <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
 * Lucide swaps the <i data-lucide> placeholder for an inline <svg>; the wrapping
 * span controls size/color via CSS (see .oc-icon in base.css).
 */
function Icon({
  name,
  size = 24,
  color,
  className = "",
  style = {},
  ...rest
}) {
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.lucide) {
      try {
        window.lucide.createIcons({
          attrs: {
            "stroke-width": 1.75
          }
        });
      } catch (e) {
        window.lucide.createIcons();
      }
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `oc-icon ${className}`,
    style: {
      width: size,
      height: size,
      color: color || "currentColor",
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": name
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action across the Ocean Cleaning site.
 * The signature CTA is the phone-call button (variant="primary", icon="phone").
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  type = "button",
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const pad = {
    sm: "10px 18px",
    md: "14px 26px",
    lg: "18px 34px"
  }[size];
  const fz = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-lg)"
  }[size];
  const iconSize = {
    sm: 17,
    md: 19,
    lg: 22
  }[size];
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--text-on-blue)",
      border: "var(--border-width) solid var(--color-primary)",
      boxShadow: "var(--shadow-blue)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--color-primary)",
      border: "var(--border-width) solid var(--ocean-200)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "var(--border-width) solid transparent",
      boxShadow: "none"
    },
    onNavy: {
      background: "var(--white)",
      color: "var(--ocean-700)",
      border: "var(--border-width) solid transparent",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: pad,
    fontFamily: "var(--font-display)",
    fontSize: fz,
    fontWeight: "var(--weight-bold)",
    lineHeight: 1,
    letterSpacing: "0.005em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition: "filter .15s ease, transform .08s ease, box-shadow .15s ease",
    whiteSpace: "nowrap",
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
  };
  const onLeave = e => {
    e.currentTarget.style.filter = "none";
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "none";
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }));
  const handlers = {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    className: `oc-button ${className}`,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ContactCard.jsx
try { (() => {
/**
 * ContactCard — one block of the dark navy contact panel: a circular line-icon
 * with a label and value (or free text) beneath. Designed for use on navy.
 */
function ContactCard({
  icon,
  label,
  value,
  href,
  className = "",
  style = {}
}) {
  const Wrapper = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Wrapper, {
    href: href,
    className: `oc-contact ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-4)",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-full)",
      border: "var(--border-width) solid rgba(255,255,255,0.22)",
      background: "rgba(255,255,255,0.06)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-on-navy-muted)",
      marginBottom: "4px"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-on-navy)"
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DashedCallout.jsx
try { (() => {
/**
 * DashedCallout — a friendly note inside a dashed ocean-blue outline with a
 * circular line-icon. Two shapes: "pill" (rounded box, e.g. the gift offer)
 * and "circle" (round badge overlaid on the hero photo, e.g. the leaf badge).
 */
function DashedCallout({
  icon = "leaf",
  shape = "pill",
  children,
  tone = "light",
  className = "",
  style = {}
}) {
  const onBlue = tone === "blue";
  const textColor = onBlue ? "var(--white)" : "var(--text-strong)";
  const dash = onBlue ? "rgba(255,255,255,0.7)" : "var(--border-dashed)";
  const iconWrapBg = onBlue ? "rgba(255,255,255,0.16)" : "var(--ocean-50)";
  const iconColor = onBlue ? "var(--white)" : "var(--color-primary)";
  if (shape === "circle") {
    return /*#__PURE__*/React.createElement("div", {
      className: `oc-callout-circle ${className}`,
      style: {
        width: 196,
        height: 196,
        borderRadius: "var(--radius-full)",
        border: `var(--border-width-dashed) dashed ${dash}`,
        background: onBlue ? "var(--color-primary)" : "rgba(255,255,255,0.94)",
        backdropFilter: "blur(2px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "22px",
        boxShadow: "var(--shadow-md)",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 34,
      color: iconColor
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-snug)",
        color: textColor
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `oc-callout ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      border: `var(--border-width-dashed) dashed ${dash}`,
      borderRadius: "var(--radius-lg)",
      background: onBlue ? "transparent" : "var(--surface-aqua)",
      padding: "var(--space-5) var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      flex: "none",
      borderRadius: "var(--radius-full)",
      background: iconWrapBg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: iconColor
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-snug)",
      color: textColor
    }
  }, children));
}
Object.assign(__ds_scope, { DashedCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DashedCallout.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCheck.jsx
try { (() => {
/**
 * FeatureCheck — a single benefit line: a small ocean-blue check in a soft
 * circle, followed by the label. Used in the "Почему выбирают нас" two-column list.
 */
function FeatureCheck({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `oc-feature ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--ocean-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCheck.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the standard section title block: a small ocean-blue eyebrow
 * above a large display heading, optional lead paragraph. Centered by default.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  className = "",
  style = {}
}) {
  const onDark = tone === "dark";
  return /*#__PURE__*/React.createElement("header", {
    className: `oc-section-heading ${className}`,
    style: {
      textAlign: align,
      maxWidth: align === "center" ? 680 : "none",
      marginInline: align === "center" ? "auto" : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--color-primary)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 2,
      background: "var(--color-primary)",
      borderRadius: 2
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-extra)",
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      color: onDark ? "var(--white)" : "var(--text-strong)",
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: onDark ? "var(--text-on-navy-muted)" : "var(--text-muted)"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceBadge.jsx
try { (() => {
/**
 * ServiceBadge — a round ocean-blue badge with a white line icon, plus a
 * title + description beneath it. Used in the "Наши услуги" grid.
 */
function ServiceBadge({
  icon,
  title,
  children,
  badgeSize = 116,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `oc-service ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: badgeSize,
      height: badgeSize,
      borderRadius: "var(--radius-full)",
      background: "var(--color-primary)",
      boxShadow: "var(--shadow-blue)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: badgeSize * 0.42,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { ServiceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/WaveDivider.jsx
try { (() => {
/**
 * WaveDivider — the smooth wavy separator between sections. Set `fill` to the
 * color of the section that follows it; `flip` mirrors the curve vertically.
 * Place it at the top of a section (or bottom, with flip) for a seamless join.
 */
function WaveDivider({
  fill = "var(--surface-page)",
  flip = false,
  height = 90,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `oc-wave ${className}`,
    style: {
      lineHeight: 0,
      transform: flip ? "scaleY(-1)" : "none",
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1440 90",
    width: "100%",
    height: height,
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,40 C 180,90 340,90 520,56 C 720,18 900,18 1080,46 C 1240,70 1360,72 1440,52 L1440,90 L0,90 Z",
    fill: fill
  })));
}
Object.assign(__ds_scope, { WaveDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/WaveDivider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* Ocean Cleaning — landing page sections.
   Composes the design-system components from the global namespace.
   Components are read at RENDER time (via ds()) so this works whether the
   bundle is loaded synchronously (UI kit) or appended async (template). */
function ds() {
  return window.OceanCleaningDesignSystem_f89970 || {};
}

/* --- shared layout helpers --- */
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      marginInline: "auto",
      paddingInline: "var(--container-pad)",
      ...style
    }
  }, children);
}

/* Placeholder image region — replace with a real photo (drop into /images/). */
function PhotoSlot({
  label,
  height = "100%",
  radius = "var(--radius-xl)",
  style = {}
}) {
  const {
    Icon
  } = ds();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: radius,
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--ocean-700) 0%, var(--ocean-500) 55%, var(--ocean-400) 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.85)",
      textAlign: "center",
      padding: 24,
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 40,
    color: "rgba(255,255,255,0.85)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 12,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-base)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-xs)",
      opacity: 0.7
    }
  }, "\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0430 \u2014 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0444\u043E\u0442\u043E"));
}

/* ============================== HEADER ============================== */
function Header() {
  const {
    Logo
  } = ds();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface-page)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 88
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 52,
    showWordmark: true
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "var(--text-sm)"
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "var(--text-sm)"
    }
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#contacts",
    style: {
      color: "var(--text-body)",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "var(--text-sm)"
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
}

/* =============================== HERO =============================== */
function Hero() {
  const {
    Button,
    DashedCallout
  } = ds();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      paddingTop: "var(--space-10)",
      paddingBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--color-primary)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 2,
      background: "var(--color-primary)",
      borderRadius: 2
    }
  }), "\u041A\u043B\u0438\u043D\u0438\u043D\u0433 \u0434\u043B\u044F HoReCa \xB7 \u0410\u043B\u043C\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-4xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-5)"
    }
  }, "\u0427\u0438\u0441\u0442\u043E\u0442\u0430 \u0438 \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)",
      margin: "0 0 var(--space-7)",
      maxWidth: 520
    }
  }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043B\u0438\u043D\u0438\u043D\u0433\u043E\u0432\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043B\u044F \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432, \u043A\u0430\u0444\u0435 \u0438 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0439 HoReCa."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "phone",
    href: "tel:+77478846807"
  }, "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043D\u0430\u043C")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\u0424\u043E\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430",
    height: 460
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -28,
      bottom: -28
    }
  }, /*#__PURE__*/React.createElement(DashedCallout, {
    icon: "leaf",
    shape: "circle"
  }, "\u0427\u0438\u0441\u0442\u043E\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u0438\u0434\u043D\u043E. \u0421\u0432\u0435\u0436\u0435\u0441\u0442\u044C, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442 \u0432\u0430\u0448\u0438 \u0433\u043E\u0441\u0442\u0438!")))));
}

/* ============================= SERVICES ============================= */
const SERVICES = [{
  icon: "sofa",
  title: "Химчистка мягкой мебели",
  text: "Удаляем пятна, загрязнения и неприятные запахи. Возвращаем мебели первозданный вид."
}, {
  icon: "layers",
  title: "Химчистка ковролина",
  text: "Глубокая очистка ковролина от грязи, пыли, пятен и бактерий. Сохраняем цвет и структуру покрытия."
}, {
  icon: "spray-can",
  title: "Сухой туман",
  text: "Эффективное устранение неприятных запахов: кухни, табака, сырости, животных и других."
}, {
  icon: "shield-check",
  title: "Дезинфекция",
  text: "Профессиональная обработка помещений и поверхностей. Уничтожаем бактерии и вирусы, заботимся о безопасности."
}];
function Services() {
  const {
    SectionHeading,
    ServiceBadge
  } = ds();
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--surface-soft)",
      paddingTop: "var(--space-9)",
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438",
    title: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0443\u0445\u043E\u0434 \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      marginTop: "var(--space-9)",
      justifyItems: "center"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceBadge, {
    key: s.title,
    icon: s.icon,
    title: s.title
  }, s.text)))));
}

/* ============================== WHY US ============================== */
const REASONS = ["Профессиональное оборудование", "Безопасные сертифицированные средства", "Быстрое выполнение работ", "Работаем в удобное для вас время", "Выезд на объект", "Индивидуальный подход"];
function WhyUs() {
  const {
    SectionHeading,
    FeatureCheck,
    DashedCallout
  } = ds();
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: "var(--surface-page)",
      paddingTop: "var(--space-9)",
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 0.85fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0430\u0441",
    title: "\u041D\u0430\u0434\u0451\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440 \u043F\u043E \u0447\u0438\u0441\u0442\u043E\u0442\u0435",
    style: {
      marginBottom: "var(--space-7)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5) var(--space-7)"
    }
  }, REASONS.map(r => /*#__PURE__*/React.createElement(FeatureCheck, {
    key: r
  }, r)))), /*#__PURE__*/React.createElement(DashedCallout, {
    icon: "gift",
    shape: "pill",
    style: {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-8)"
    }
  }, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432!")));
}

/* =========================== CONTACT PANEL ========================== */
function ContactPanel() {
  const {
    SectionHeading,
    ContactCard
  } = ds();
  return /*#__PURE__*/React.createElement("section", {
    id: "contacts",
    style: {
      background: "var(--surface-invert)",
      paddingTop: "var(--space-9)",
      paddingBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    title: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438",
    style: {
      marginBottom: "var(--space-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    icon: "phone",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    value: "+7 747 884 6807",
    href: "tel:+77478846807"
  }), /*#__PURE__*/React.createElement(ContactCard, {
    icon: "instagram",
    label: "Instagram",
    value: "Ocean__cleeaning",
    href: "https://instagram.com/ocean__cleeaning"
  }), /*#__PURE__*/React.createElement(ContactCard, {
    icon: "map-pin",
    label: "\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
    value: "\u0412\u044B\u0435\u0437\u0436\u0430\u0435\u043C \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0443 \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438"
  }))));
}

/* ============================== FOOTER ============================== */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ocean-950)",
      paddingTop: "var(--space-5)",
      paddingBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-on-navy-muted)"
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/77074534518",
    style: {
      color: "var(--white)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, "Anuken"))));
}

/* ============================ COMPOSITION =========================== */
function LandingPage() {
  const {
    WaveDivider
  } = ds();
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-page"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "var(--surface-soft)"
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "var(--surface-page)"
  }), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(WaveDivider, {
    fill: "var(--surface-invert)"
  }), /*#__PURE__*/React.createElement(ContactPanel, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  LandingPage,
  Header,
  Hero,
  Services,
  WhyUs,
  ContactPanel,
  Footer,
  PhotoSlot,
  Container
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.DashedCallout = __ds_scope.DashedCallout;

__ds_ns.FeatureCheck = __ds_scope.FeatureCheck;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceBadge = __ds_scope.ServiceBadge;

__ds_ns.WaveDivider = __ds_scope.WaveDivider;

})();
