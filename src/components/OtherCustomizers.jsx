import { useState, useRef } from "react";
import { FaUpload, FaUndo, FaFont, FaImage, FaPalette, FaShapes, FaRulerCombined } from "react-icons/fa";

const MUG_DESIGNS = [
  { id: "standard", label: "Classic Mug" },
  { id: "heart", label: "Heart Handle" },
  { id: "vshape", label: "Tapered V-Cup" }
];

const PEN_DESIGNS = [
  { id: "classic", label: "Ballpoint" },
  { id: "executive", label: "Slim Exec" },
  { id: "fountain", label: "Fountain Pen" }
];

const PLATE_DESIGNS = [
  { id: "rectangle", label: "Rectangular" },
  { id: "oval", label: "Classic Oval" },
  { id: "bevel", label: "Beveled Shield" }
];

const FRAME_DESIGNS = [
  { id: "oak", label: "Golden Oak" },
  { id: "ebony", label: "Ebony Black" },
  { id: "mahogany", label: "Mahogany" }
];

const LETTERHEAD_DESIGNS = [
  { id: "modern", label: "Modern Minimal" },
  { id: "corporate", label: "Classic Corp" },
  { id: "sidebar", label: "Sidebar Info" }
];


const PRESET_COLORS = [
  { name: "Gold", value: "#d4af37" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Silver", value: "#c0c0c0" },
  { name: "Crimson", value: "#b22222" },
  { name: "Royal Blue", value: "#1e3a8a" },
  { name: "Emerald", value: "#065f46" },
];

export default function OtherCustomizers({ productId }) {
  const fileInputRef = useRef(null);
  const [activeFrameSlot, setActiveFrameSlot] = useState(0);

  const [mugDesign, setMugDesign] = useState("standard");
  const [penDesign, setPenDesign] = useState("classic");
  const [plateDesign, setPlateDesign] = useState("rectangle");
  const [frameDesign, setFrameDesign] = useState("oak");
  const [letterheadDesign, setLetterheadDesign] = useState("modern");
  const [notebookDesign, setNotebookDesign] = useState("classic");

  const [mugSize, setMugSize] = useState("11 Oz");
  const [mugText, setMugText] = useState("Coffee Time");
  const [mugImage, setMugImage] = useState({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });

  const [penSize, setPenSize] = useState("Standard");
  const [penColor, setPenColor] = useState("#1e293b");
  const [penTrim, setPenTrim] = useState("#d4af37");
  const [penText, setPenText] = useState("Alex Mercer");
  const [penTextColor, setPenTextColor] = useState("#ffffff");
  const [penImage, setPenImage] = useState({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });

  const [plateSize, setPlateSize] = useState('12" x 6"');
  const [plateMounts, setPlateMounts] = useState("#d4af37");
  const [plateTitle, setPlateTitle] = useState("Dr. Olivia Bennett");
  const [plateSubtitle, setPlateSubtitle] = useState("Chief Medical Officer");
  const [plateTitleColor, setPlateTitleColor] = useState("#1e293b");
  const [plateSubtitleColor, setPlateSubtitleColor] = useState("#64748b");

  const [frameSize, setFrameSize] = useState('16" x 16"');
  const [frameGrid, setFrameGrid] = useState("2x2");
  const [frameImages, setFrameImages] = useState({
    0: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
    1: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
    2: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
    3: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
    4: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
    5: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
  });

  const [letterheadSize, setLetterheadSize] = useState("A4");
  const [letterheadName, setLetterheadName] = useState("Acme Corporation");
  const [letterheadAddress, setLetterheadAddress] = useState("123 Innovation Way, Tech Park");
  const [letterheadImage, setLetterheadImage] = useState({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });

  const [notebookSize, setNotebookSize] = useState("A5");
  const [notebookWire, setNotebookWire] = useState("#c0c0c0");
  const [notebookTitle, setNotebookTitle] = useState("My Daily Thoughts");
  const [notebookImage, setNotebookImage] = useState({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (productId === "mug") {
        setMugImage((prev) => ({ ...prev, url }));
      } else if (productId === "pen") {
        setPenImage((prev) => ({ ...prev, url }));
      } else if (productId === "letterhead") {
        setLetterheadImage((prev) => ({ ...prev, url }));
      } else if (productId === "notebook") {
        setNotebookImage((prev) => ({ ...prev, url }));
      } else if (productId === "frame") {
        setFrameImages((prev) => ({
          ...prev,
          [activeFrameSlot]: { ...prev[activeFrameSlot], url },
        }));
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    if (productId === "mug") {
      setMugImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
    } else if (productId === "pen") {
      setPenImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
    } else if (productId === "letterhead") {
      setLetterheadImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
    } else if (productId === "notebook") {
      setNotebookImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
    } else if (productId === "frame") {
      setFrameImages((prev) => ({
        ...prev,
        [activeFrameSlot]: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
      }));
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFrameSlotClick = (slotIdx) => {
    setActiveFrameSlot(slotIdx);
  };

  const handleMugImageUpdate = (fields) => {
    setMugImage((prev) => ({ ...prev, ...fields }));
  };

  const handlePenImageUpdate = (fields) => {
    setPenImage((prev) => ({ ...prev, ...fields }));
  };

  const handleLetterheadImageUpdate = (fields) => {
    setLetterheadImage((prev) => ({ ...prev, ...fields }));
  };

  const handleNotebookImageUpdate = (fields) => {
    setNotebookImage((prev) => ({ ...prev, ...fields }));
  };

  const handleFrameImageUpdate = (slotIdx, fields) => {
    setFrameImages((prev) => ({
      ...prev,
      [slotIdx]: { ...prev[slotIdx], ...fields },
    }));
  };

  const getMugScale = () => {
    if (mugSize === "11 Oz") return "scale-90";
    return "scale-100";
  };

  const getPenScale = () => {
    if (penSize === "Slimline") return "scale-y-75 scale-x-90";
    if (penSize === "Chunky Corporate") return "scale-y-110 scale-x-100";
    return "scale-95";
  };

  const getPlateScale = () => {
    if (plateSize === '12" x 6"') return "scale-90";
    if (plateSize === '20" x 10"') return "scale-110";
    return "scale-100";
  };

  const getFrameScale = () => {
    if (frameSize === '12" x 12"') return "scale-75";
    if (frameSize === '16" x 16"') return "scale-90";
    return "scale-100";
  };

  const getLetterheadScale = () => {
    if (letterheadSize === "US Letter") return "scale-95";
    if (letterheadSize === "A5 Compact") return "scale-85";
    return "scale-100";
  };

  return (
    <div className="max-w-7xl mx-auto px-1 py-1 fade-in-up">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/60 shadow-md p-5 flex flex-col items-center justify-center h-full min-h-[460px]">
          {productId === "mug" && (
            <div className={`w-full max-w-[320px] transition-transform duration-500 ease-out transform ${getMugScale()}`}>
              <svg viewBox="0 0 400 400" className="w-full">
                <defs>
                  <clipPath id="mug-clip-rect">
                    <rect x="102" y="102" width="176" height="196" rx="13" />
                  </clipPath>
                  <clipPath id="mug-clip-poly">
                    <polygon points="102,102 278,102 248,298 132,298" />
                  </clipPath>
                </defs>

                {mugDesign === "standard" && (
                  <>
                    <path d="M 280,140 C 330,140 350,170 350,200 C 350,230 330,260 280,260" fill="none" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" />
                    <rect x="100" y="100" width="180" height="200" rx="15" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
                    <ellipse cx="190" cy="100" rx="90" ry="10" fill="#f1f5f9" opacity="0.5" />
                  </>
                )}

                {mugDesign === "heart" && (
                  <>
                    <path d="M 280,140 C 320,110 360,150 320,195 C 360,240 320,280 280,250" fill="none" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" />
                    <rect x="100" y="100" width="180" height="200" rx="15" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
                    <ellipse cx="190" cy="100" rx="90" ry="10" fill="#f1f5f9" opacity="0.5" />
                  </>
                )}

                {mugDesign === "vshape" && (
                  <>
                    <path d="M 270,140 C 320,140 340,170 340,200 C 340,230 320,260 255,260" fill="none" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" />
                    <polygon points="100,100 280,100 250,300 130,300" fill="#ffffff" stroke="#cbd5e1" strokeWidth="4" />
                    <ellipse cx="190" cy="100" rx="90" ry="10" fill="#f1f5f9" opacity="0.5" />
                  </>
                )}

                <g clipPath={mugDesign === "vshape" ? "url(#mug-clip-poly)" : "url(#mug-clip-rect)"}>
                  {mugImage.url ? (
                    <image
                      href={mugImage.url}
                      x={100 - (180 * (mugImage.zoom - 1)) / 2}
                      y={100 - (200 * (mugImage.zoom - 1)) / 2}
                      width={180 * mugImage.zoom}
                      height={200 * mugImage.zoom}
                      transform={`translate(${mugImage.xOffset}, ${mugImage.yOffset}) rotate(${mugImage.rotation} 190 200)`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  ) : (
                    <g className="cursor-pointer" onClick={triggerFileSelect}>
                      <rect x="100" y="100" width="180" height="200" fill="#f8fafc" opacity="0.1" />
                      <text x="190" y="190" textAnchor="middle" className="fill-slate-300 font-sans text-[10px] font-bold uppercase tracking-wider">Tap to Choose Photo</text>
                    </g>
                  )}
                </g>

                {mugText && (
                  <text x="190" y="260" textAnchor="middle" fill="#1e293b" className="font-heading font-black text-base drop-shadow-[0_1px_1.5px_rgba(255,255,255,0.8)]">
                    {mugText}
                  </text>
                )}
              </svg>
            </div>
          )}

          {productId === "pen" && (
            <div className={`w-full max-w-[320px] transition-transform duration-500 ease-out transform rotate-12 ${getPenScale()}`}>
              <svg viewBox="0 0 400 400" className="w-full">
                <defs>
                  <clipPath id="pen-clip">
                    <rect x="110" y="180" width="120" height="30" />
                  </clipPath>
                </defs>

                {penDesign === "classic" && (
                  <g>
                    <rect x="60" y="185" width="260" height="20" rx="3" fill={penColor} />
                    <polygon points="320,185 350,195 320,205" fill="#cbd5e1" />
                    <path d="M 80,185 L 120,185 L 120,205 L 80,205 Z" fill={penTrim} />
                    <path d="M 270,185 L 280,185 L 280,205 L 270,205 Z" fill={penTrim} />
                    <rect x="70" y="178" width="50" height="4" rx="1" fill={penTrim} />
                  </g>
                )}

                {penDesign === "executive" && (
                  <g>
                    <rect x="50" y="188" width="280" height="14" rx="2" fill={penColor} />
                    <polygon points="330,188 360,195 330,202" fill="#94a3b8" />
                    <line x1="190" y1="188" x2="190" y2="202" stroke={penTrim} strokeWidth="3" />
                    <path d="M 70,188 L 100,188 L 100,202 L 70,202 Z" fill={penTrim} />
                    <rect x="65" y="182" width="40" height="3" rx="1" fill={penTrim} />
                  </g>
                )}

                {penDesign === "fountain" && (
                  <g>
                    <rect x="70" y="180" width="130" height="30" rx="4" fill={penColor} />
                    <rect x="200" y="183" width="100" height="24" fill={penColor} opacity="0.9" />
                    <polygon points="300,183 330,195 300,207" fill="#cbd5e1" stroke={penTrim} strokeWidth="1" />
                    <rect x="200" y="180" width="10" height="30" fill={penTrim} />
                    <path d="M 90,180 L 100,180 L 100,210 L 90,210 Z" fill={penTrim} />
                    <rect x="80" y="172" width="60" height="5" rx="2" fill={penTrim} />
                  </g>
                )}

                <g clipPath="url(#pen-clip)">
                  {penImage.url && (
                    <image
                      href={penImage.url}
                      x={110 - (120 * (penImage.zoom - 1)) / 2}
                      y={180 - (30 * (penImage.zoom - 1)) / 2}
                      width={120 * penImage.zoom}
                      height={30 * penImage.zoom}
                      transform={`translate(${penImage.xOffset}, ${penImage.yOffset}) rotate(${penImage.rotation} 170 195)`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  )}
                </g>

                {penText && (
                  <text x="170" y="198" textAnchor="middle" fill={penTextColor} className="font-serif italic font-bold text-[9px] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.5)]">
                    {penText}
                  </text>
                )}
              </svg>
            </div>
          )}

          {productId === "plate" && (
            <div className={`w-full max-w-[320px] transition-transform duration-500 ease-out transform ${getPlateScale()}`}>
              <svg viewBox="0 0 400 400" className="w-full">
                {plateDesign === "rectangle" && (
                  <rect x="30" y="120" width="340" height="160" rx="8" fill="#f8fafc" fillOpacity="0.8" stroke="#cbd5e1" strokeWidth="4" />
                )}

                {plateDesign === "oval" && (
                  <ellipse cx="200" cy="200" rx="170" ry="80" fill="#f8fafc" fillOpacity="0.8" stroke="#cbd5e1" strokeWidth="4" />
                )}

                {plateDesign === "bevel" && (
                  <path d="M 50,120 L 350,120 L 370,160 L 370,240 L 350,280 L 50,280 L 30,240 L 30,160 Z" fill="#f8fafc" fillOpacity="0.8" stroke="#cbd5e1" strokeWidth="4" />
                )}

                <circle cx="50" cy="140" r="10" fill={plateMounts} stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="350" cy="140" r="10" fill={plateMounts} stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="50" cy="260" r="10" fill={plateMounts} stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="350" cy="260" r="10" fill={plateMounts} stroke="#cbd5e1" strokeWidth="2" />

                {plateTitle && (
                  <text x="200" y="185" textAnchor="middle" fill={plateTitleColor} className="font-heading font-bold text-lg">
                    {plateTitle}
                  </text>
                )}
                {plateSubtitle && (
                  <text x="200" y="220" textAnchor="middle" fill={plateSubtitleColor} className="font-sans text-xs font-semibold uppercase tracking-wider">
                    {plateSubtitle}
                  </text>
                )}
              </svg>
            </div>
          )}

          {productId === "frame" && (
            <div className={`w-full max-w-[320px] transition-transform duration-500 ease-out transform ${getFrameScale()}`}>
              <svg viewBox="0 0 400 400" className="w-full">
                <defs>
                  <clipPath id="frame-clip-2x2-0">
                    <rect x="65" y="85" width="120" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-2x2-1">
                    <rect x="215" y="85" width="120" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-2x2-2">
                    <rect x="65" y="215" width="120" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-2x2-3">
                    <rect x="215" y="215" width="120" height="100" rx="4" />
                  </clipPath>

                  <clipPath id="frame-clip-3x2-0">
                    <rect x="65" y="85" width="75" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-3x2-1">
                    <rect x="162" y="85" width="75" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-3x2-2">
                    <rect x="260" y="85" width="75" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-3x2-3">
                    <rect x="65" y="215" width="75" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-3x2-4">
                    <rect x="162" y="215" width="75" height="100" rx="4" />
                  </clipPath>
                  <clipPath id="frame-clip-3x2-5">
                    <rect x="260" y="215" width="75" height="100" rx="4" />
                  </clipPath>
                </defs>

                <rect
                  x="40"
                  y="60"
                  width="320"
                  height="280"
                  fill="#f8fafc"
                  stroke={frameDesign === "oak" ? "#854d0e" : frameDesign === "ebony" ? "#1e293b" : "#7c2d12"}
                  strokeWidth="18"
                  rx="8"
                />

                {frameGrid === "2x2" ? (
                  <>
                    <rect x="65" y="85" width="120" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="215" y="85" width="120" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="65" y="215" width="120" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="215" y="215" width="120" height="100" fill="#e2e8f0" rx="4" />

                    {[0, 1, 2, 3].map((idx) => {
                      const x = idx % 2 === 0 ? 65 : 215;
                      const y = idx < 2 ? 85 : 215;
                      const cx = x + 60;
                      const cy = y + 50;
                      const imgState = frameImages[idx];
                      return (
                        <g key={idx}>
                          <g clipPath={`url(#frame-clip-2x2-${idx})`}>
                            {imgState.url ? (
                              <image
                                href={imgState.url}
                                x={x - (120 * (imgState.zoom - 1)) / 2}
                                y={y - (100 * (imgState.zoom - 1)) / 2}
                                width={120 * imgState.zoom}
                                height={100 * imgState.zoom}
                                transform={`translate(${imgState.xOffset}, ${imgState.yOffset}) rotate(${imgState.rotation} ${cx} ${cy})`}
                                preserveAspectRatio="xMidYMid slice"
                                className="pointer-events-none"
                              />
                            ) : (
                              <g className="cursor-pointer" onClick={() => handleFrameSlotClick(idx)}>
                                <rect x={x} y={y} width="120" height="100" fill="transparent" />
                                <text x={cx} y={cy + 4} textAnchor="middle" className="fill-slate-400 font-bold text-[9px] pointer-events-none">Slot {idx + 1}</text>
                              </g>
                            )}
                          </g>
                          <rect
                            x={x}
                            y={y}
                            width="120"
                            height="100"
                            fill="transparent"
                            stroke={activeFrameSlot === idx ? "#3b82f6" : "transparent"}
                            strokeWidth="2.5"
                            rx="4"
                            className="cursor-pointer"
                            onClick={() => handleFrameSlotClick(idx)}
                          />
                        </g>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <rect x="65" y="85" width="75" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="162" y="85" width="75" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="260" y="85" width="75" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="65" y="215" width="75" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="162" y="215" width="75" height="100" fill="#e2e8f0" rx="4" />
                    <rect x="260" y="215" width="75" height="100" fill="#e2e8f0" rx="4" />

                    {[0, 1, 2, 3, 4, 5].map((idx) => {
                      const col = idx % 3;
                      const row = Math.floor(idx / 3);
                      const x = col === 0 ? 65 : col === 1 ? 162 : 260;
                      const y = row === 0 ? 85 : 215;
                      const cx = x + 37.5;
                      const cy = y + 50;
                      const imgState = frameImages[idx];
                      return (
                        <g key={idx}>
                          <g clipPath={`url(#frame-clip-3x2-${idx})`}>
                            {imgState.url ? (
                              <image
                                href={imgState.url}
                                x={x - (75 * (imgState.zoom - 1)) / 2}
                                y={y - (100 * (imgState.zoom - 1)) / 2}
                                width={75 * imgState.zoom}
                                height={100 * imgState.zoom}
                                transform={`translate(${imgState.xOffset}, ${imgState.yOffset}) rotate(${imgState.rotation} ${cx} ${cy})`}
                                preserveAspectRatio="xMidYMid slice"
                                className="pointer-events-none"
                              />
                            ) : (
                              <g className="cursor-pointer" onClick={() => handleFrameSlotClick(idx)}>
                                <rect x={x} y={y} width="75" height="100" fill="transparent" />
                                <text x={cx} y={cy + 4} textAnchor="middle" className="fill-slate-400 font-bold text-[8px] pointer-events-none">Slot {idx + 1}</text>
                              </g>
                            )}
                          </g>
                          <rect
                            x={x}
                            y={y}
                            width="75"
                            height="100"
                            fill="transparent"
                            stroke={activeFrameSlot === idx ? "#3b82f6" : "transparent"}
                            strokeWidth="2.5"
                            rx="4"
                            className="cursor-pointer"
                            onClick={() => handleFrameSlotClick(idx)}
                          />
                        </g>
                      );
                    })}
                  </>
                )}
              </svg>
            </div>
          )}

          {productId === "letterhead" && (
            <div className={`w-full max-w-[280px] aspect-[1/1.414] bg-white border border-slate-300 shadow-lg p-5 flex flex-col justify-between text-left transition-transform duration-500 ease-out transform ${getLetterheadScale()}`}>
              <div className={`border-b border-slate-200 pb-3 flex items-start ${letterheadDesign === "sidebar" ? "flex-col gap-2" : "justify-between"}`}>
                {letterheadDesign === "corporate" && (
                  <div className="w-full text-center border-b border-amber-500/20 pb-2 mb-2">
                    <span className="text-[7px] text-amber-600 font-black uppercase tracking-widest">Official Executive Document</span>
                  </div>
                )}

                <div className={letterheadDesign === "sidebar" ? "order-2" : ""}>
                  <h4 className="font-heading font-black text-sm text-slate-800">{letterheadName}</h4>
                  <p className="text-[8px] text-slate-400 mt-0.5 leading-normal">{letterheadAddress}</p>
                </div>

                <div className={`relative w-10 h-10 overflow-hidden border border-slate-200 rounded-md bg-slate-50 flex items-center justify-center cursor-pointer ${letterheadDesign === "sidebar" ? "order-1" : ""}`} onClick={triggerFileSelect}>
                  {letterheadImage.url ? (
                    <img
                      src={letterheadImage.url}
                      style={{
                        transform: `translate(${letterheadImage.xOffset}px, ${letterheadImage.yOffset}px) scale(${letterheadImage.zoom}) rotate(${letterheadImage.rotation}deg)`,
                        transformOrigin: "center",
                      }}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <div className="text-[7px] text-slate-400 font-bold uppercase pointer-events-none">Logo</div>
                  )}
                </div>
              </div>

              <div className="flex-1 py-4 space-y-2">
                {letterheadDesign === "modern" && (
                  <>
                    <div className="h-2 w-2/3 bg-slate-100 rounded-xs" />
                    <div className="h-2 w-full bg-slate-100 rounded-xs" />
                    <div className="h-2 w-full bg-slate-100 rounded-xs" />
                    <div className="h-2 w-3/4 bg-slate-100 rounded-xs" />
                  </>
                )}

                {letterheadDesign === "corporate" && (
                  <>
                    <div className="h-2 w-full bg-slate-50 rounded-xs" />
                    <div className="h-2 w-5/6 bg-slate-50 rounded-xs" />
                    <div className="h-2 w-full bg-slate-50 rounded-xs" />
                    <div className="h-2 w-4/5 bg-slate-50 rounded-xs" />
                    <div className="h-10" />
                    <div className="border-t border-slate-200 w-24 ml-auto pt-1 text-right">
                      <span className="text-[5px] text-slate-400 block uppercase">Authorized Signature</span>
                    </div>
                  </>
                )}

                {letterheadDesign === "sidebar" && (
                  <div className="grid grid-cols-4 gap-4 h-full">
                    <div className="col-span-1 border-r border-slate-100 pr-2 space-y-1">
                      <div className="h-1 w-full bg-blue-100 rounded-xs" />
                      <div className="h-1 w-5/6 bg-slate-100 rounded-xs" />
                      <div className="h-1 w-full bg-slate-100 rounded-xs" />
                    </div>
                    <div className="col-span-3 space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded-xs" />
                      <div className="h-2 w-full bg-slate-100 rounded-xs" />
                      <div className="h-2 w-3/4 bg-slate-100 rounded-xs" />
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-2 text-right">
                <span className="text-[6px] text-slate-400 font-bold uppercase tracking-widest">Acme Official Document</span>
              </div>
            </div>
          )}

          {productId === "notebook" && (
            <div className={`w-full max-w-[320px] transition-transform duration-500 ease-out transform ${getNotebookScale()}`}>
              <svg viewBox="0 0 400 400" className="w-full">
                <defs>
                  <clipPath id="notebook-clip">
                    <rect x="85" y="90" width="200" height="220" rx="6" />
                  </clipPath>
                  <pattern id="notebook-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="#475569" />
                  </pattern>
                </defs>

                <path d="M 60,80 L 75,80 C 75,80 75,320 75,320 L 60,320 Z" fill={notebookWire} />
                {Array.from({ length: 12 }).map((_, i) => (
                  <rect key={i} x="50" y={95 + i * 18} width="20" height="4" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                ))}

                <rect x="75" y="80" width="220" height="240" rx="10" fill="#475569" stroke="#334155" strokeWidth="2" />

                <g clipPath="url(#notebook-clip)">
                  {notebookImage.url ? (
                    <image
                      href={notebookImage.url}
                      x={85 - (200 * (notebookImage.zoom - 1)) / 2}
                      y={90 - (220 * (notebookImage.zoom - 1)) / 2}
                      width={200 * notebookImage.zoom}
                      height={220 * notebookImage.zoom}
                      transform={`translate(${notebookImage.xOffset}, ${notebookImage.yOffset}) rotate(${notebookImage.rotation} 185 200)`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  ) : (
                    <>
                      {notebookDesign === "classic" && <rect x="85" y="90" width="200" height="220" fill="#1e293b" />}
                      {notebookDesign === "dotted" && (
                        <>
                          <rect x="85" y="90" width="200" height="220" fill="#f8fafc" />
                          <rect x="85" y="90" width="200" height="220" fill="url(#notebook-dots)" />
                        </>
                      )}
                      {notebookDesign === "planner" && (
                        <>
                          <rect x="85" y="90" width="200" height="110" fill="#1e3a8a" />
                          <rect x="85" y="200" width="200" height="110" fill="#ffffff" />
                          <rect x="85" y="196" width="200" height="8" fill="#d4af37" />
                        </>
                      )}
                    </>
                  )}
                </g>

                <use href="#notebook-clip" className="fill-none stroke-slate-700/30 stroke-1" />

                {notebookTitle && (
                  <g>
                    {notebookDesign === "dotted" ? (
                      <>
                        <rect x="125" y="250" width="120" height="30" rx="4" fill="#ffffff" stroke="#475569" strokeWidth="1.5" />
                        <text x="185" y="269" textAnchor="middle" fill="#0f172a" className="font-heading font-black text-[10px]">
                          {notebookTitle}
                        </text>
                      </>
                    ) : (
                      <text x="185" y="275" textAnchor="middle" fill={notebookDesign === "planner" ? "#0f172a" : "#ffffff"} className="font-heading font-black text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                        {notebookTitle}
                      </text>
                    )}
                  </g>
                )}
              </svg>
            </div>
          )}
        </div>

        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/60 shadow-md p-5 flex flex-col gap-4 h-full">
          <div>
            <h2 className="font-heading font-black text-xl text-slate-900 leading-tight">
              {productId === "mug" && "Custom Mug Studio"}
              {productId === "pen" && "Engraved Pen Studio"}
              {productId === "plate" && "Acrylic Name Plate Studio"}
              {productId === "frame" && "Collage Frame Studio"}
              {productId === "letterhead" && "Letterhead Designer"}
              {productId === "notebook" && "Notebook Cover Studio"}
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">Customize your executive personalized gear in real-time.</p>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FaShapes className="text-slate-500" />
              <span>Select Design Template</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {productId === "mug" && MUG_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setMugDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${mugDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}

              {productId === "pen" && PEN_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setPenDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${penDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}

              {productId === "plate" && PLATE_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setPlateDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${plateDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}

              {productId === "frame" && FRAME_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setFrameDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${frameDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}

              {productId === "letterhead" && LETTERHEAD_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setLetterheadDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${letterheadDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}

              {productId === "notebook" && NOTEBOOK_DESIGNS.map((des) => (
                <button key={des.id} type="button" onClick={() => setNotebookDesign(des.id)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer truncate ${notebookDesign === des.id ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{des.label}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FaRulerCombined className="text-slate-500" />
              <span>Adjust Size Dimensions</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {productId === "mug" && ["11 Oz", "15 Oz"].map((sz) => (
                <button key={sz} type="button" onClick={() => setMugSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${mugSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}

              {productId === "pen" && ["Standard", "Slimline", "Chunky Corporate"].map((sz) => (
                <button key={sz} type="button" onClick={() => setPenSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${penSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}

              {productId === "plate" && ['12" x 6"', '16" x 8"', '20" x 10"'].map((sz) => (
                <button key={sz} type="button" onClick={() => setPlateSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${plateSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}

              {productId === "frame" && ['12" x 12"', '16" x 16"', '24" x 24"'].map((sz) => (
                <button key={sz} type="button" onClick={() => setFrameSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${frameSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}

              {productId === "letterhead" && ["A4", "US Letter", "A5 Compact"].map((sz) => (
                <button key={sz} type="button" onClick={() => setLetterheadSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${letterheadSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}

              {productId === "notebook" && ["A5", "A4", "Pocket size"].map((sz) => (
                <button key={sz} type="button" onClick={() => setNotebookSize(sz)} className={`py-1.5 px-2 border rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${notebookSize === sz ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{sz}</button>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {productId === "mug" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Mug Graphic Photo</span>
                <div className="flex gap-2">
                  <button type="button" onClick={triggerFileSelect} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    <FaUpload />
                    <span>Upload Photo</span>
                  </button>
                  {mugImage.url && (
                    <button type="button" onClick={clearImage} className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer">
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {mugImage.url && (
                <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Zoom</span>
                      <span>{mugImage.zoom.toFixed(1)}x</span>
                    </div>
                    <input type="range" min="0.5" max="5.0" step="0.1" value={mugImage.zoom} onChange={(e) => handleMugImageUpdate({ zoom: parseFloat(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Horizontal Shift</span>
                      <span>{mugImage.xOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={mugImage.xOffset} onChange={(e) => handleMugImageUpdate({ xOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Vertical Shift</span>
                      <span>{mugImage.yOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={mugImage.yOffset} onChange={(e) => handleMugImageUpdate({ yOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Rotation</span>
                      <span>{mugImage.rotation}°</span>
                    </div>
                    <input type="range" min="0" max="360" value={mugImage.rotation} onChange={(e) => handleMugImageUpdate({ rotation: parseInt(e.target.value) })} />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Custom Printed Text</span>
                <input type="text" value={mugText} onChange={(e) => setMugText(e.target.value)} placeholder="Type mug text" className="w-full text-xs font-semibold border border-slate-200 rounded-lg p-2 outline-none" />
              </div>
            </div>
          )}

          {productId === "pen" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Pen Barrel Colors</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="block font-bold text-slate-500 mb-1">Base Color</span>
                    <div className="flex gap-1.5 items-center">
                      <input type="color" value={penColor} onChange={(e) => setPenColor(e.target.value)} className="w-8 h-8 rounded border border-slate-200 cursor-pointer" />
                      <div className="flex gap-1">
                        {["#1e293b", "#b22222", "#065f46"].map((col) => (
                          <button key={col} type="button" onClick={() => setPenColor(col)} style={{ backgroundColor: col }} className="w-5 h-5 rounded-full border border-slate-200" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block font-bold text-slate-500 mb-1">Metallic Trim Accent</span>
                    <div className="flex gap-1.5 items-center">
                      <input type="color" value={penTrim} onChange={(e) => setPenTrim(e.target.value)} className="w-8 h-8 rounded border border-slate-200 cursor-pointer" />
                      <div className="flex gap-1">
                        {["#d4af37", "#c0c0c0", "#1e293b"].map((col) => (
                          <button key={col} type="button" onClick={() => setPenTrim(col)} style={{ backgroundColor: col }} className="w-5 h-5 rounded-full border border-slate-200" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Pen Custom Logo Graphic</span>
                <div className="flex gap-2">
                  <button type="button" onClick={triggerFileSelect} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    <FaUpload />
                    <span>Upload Logo Graphic</span>
                  </button>
                  {penImage.url && (
                    <button type="button" onClick={clearImage} className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer">
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {penImage.url && (
                <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Logo Zoom</span>
                      <span>{penImage.zoom.toFixed(1)}x</span>
                    </div>
                    <input type="range" min="0.5" max="5.0" step="0.1" value={penImage.zoom} onChange={(e) => handlePenImageUpdate({ zoom: parseFloat(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Horizontal Shift</span>
                      <span>{penImage.xOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={penImage.xOffset} onChange={(e) => handlePenImageUpdate({ xOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Vertical Shift</span>
                      <span>{penImage.yOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={penImage.yOffset} onChange={(e) => handlePenImageUpdate({ yOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Rotation</span>
                      <span>{penImage.rotation}°</span>
                    </div>
                    <input type="range" min="0" max="360" value={penImage.rotation} onChange={(e) => handlePenImageUpdate({ rotation: parseInt(e.target.value) })} />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Engraving Text Settings</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input type="text" value={penText} onChange={(e) => setPenText(e.target.value)} maxLength={20} placeholder="Type engraving name" className="text-xs font-semibold border border-slate-200 rounded-lg p-2 outline-none w-full" />
                  <div className="flex gap-1.5 items-center justify-end">
                    <span className="text-[10px] font-bold text-slate-400">Color:</span>
                    <input type="color" value={penTextColor} onChange={(e) => setPenTextColor(e.target.value)} className="w-8 h-8 rounded border border-slate-200 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {productId === "plate" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Mount Standoff Studs</span>
                <div className="flex gap-2">
                  {[
                    { val: "#d4af37", name: "Gold" },
                    { val: "#c0c0c0", name: "Silver" },
                    { val: "#000000", name: "Black" },
                  ].map((stud) => (
                    <button key={stud.val} type="button" onClick={() => setPlateMounts(stud.val)} className={`py-1 px-3 border rounded-lg text-xs font-bold flex-1 ${plateMounts === stud.val ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{stud.name}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-3">
                <span className="text-xs font-bold text-slate-400 block uppercase border-b border-slate-200/60 pb-1">Input Text Fields</span>

                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-slate-500">Line 1: Name Title</span>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                    <input type="text" value={plateTitle} onChange={(e) => setPlateTitle(e.target.value)} placeholder="Type name title" className="sm:col-span-9 text-xs font-semibold border border-slate-200 rounded-lg p-2 bg-white outline-none" />
                    <div className="sm:col-span-3 flex justify-end items-center gap-1">
                      <span className="text-[10px] font-bold text-slate-400">Color:</span>
                      <input type="color" value={plateTitleColor} onChange={(e) => setPlateTitleColor(e.target.value)} className="w-8 h-8 rounded border border-slate-200 cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-slate-500">Line 2: Designation</span>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                    <input type="text" value={plateSubtitle} onChange={(e) => setPlateSubtitle(e.target.value)} placeholder="Type designation" className="sm:col-span-9 text-xs font-semibold border border-slate-200 rounded-lg p-2 bg-white outline-none" />
                    <div className="sm:col-span-3 flex justify-end items-center gap-1">
                      <span className="text-[10px] font-bold text-slate-400">Color:</span>
                      <input type="color" value={plateSubtitleColor} onChange={(e) => setPlateSubtitleColor(e.target.value)} className="w-8 h-8 rounded border border-slate-200 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {productId === "frame" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Collage Format</span>
                <div className="flex gap-2">
                  {["2x2", "3x2"].map((grid) => (
                    <button key={grid} type="button" onClick={() => setFrameGrid(grid)} className={`py-1.5 px-3 border rounded-lg text-xs font-bold flex-1 ${frameGrid === grid ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{grid}</button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-3">
                <span className="text-xs font-bold text-slate-400 block uppercase border-b border-slate-200/60 pb-1">Image Slots Configuration</span>

                <div className="flex gap-1 overflow-x-auto pb-1">
                  {(frameGrid === "2x2" ? [0, 1, 2, 3] : [0, 1, 2, 3, 4, 5]).map((idx) => (
                    <button key={idx} type="button" onClick={() => setActiveFrameSlot(idx)} className={`py-1.5 px-2.5 border rounded-lg text-xs font-bold whitespace-nowrap ${activeFrameSlot === idx ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>Slot {idx + 1}</button>
                  ))}
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex gap-2">
                    <button type="button" onClick={triggerFileSelect} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                      <FaUpload />
                      <span>Upload Photo for Slot {activeFrameSlot + 1}</span>
                    </button>
                    {frameImages[activeFrameSlot].url && (
                      <button type="button" onClick={clearImage} className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer">
                        Remove
                      </button>
                    )}
                  </div>

                  {frameImages[activeFrameSlot].url && (
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                          <span>Slot {activeFrameSlot + 1} Zoom</span>
                          <span>{frameImages[activeFrameSlot].zoom.toFixed(1)}x</span>
                        </div>
                        <input type="range" min="0.5" max="5.0" step="0.1" value={frameImages[activeFrameSlot].zoom} onChange={(e) => handleFrameImageUpdate(activeFrameSlot, { zoom: parseFloat(e.target.value) })} />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                          <span>Horizontal Shift</span>
                          <span>{frameImages[activeFrameSlot].xOffset}px</span>
                        </div>
                        <input type="range" min="-100" max="100" value={frameImages[activeFrameSlot].xOffset} onChange={(e) => handleFrameImageUpdate(activeFrameSlot, { xOffset: parseInt(e.target.value) })} />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                          <span>Vertical Shift</span>
                          <span>{frameImages[activeFrameSlot].yOffset}px</span>
                        </div>
                        <input type="range" min="-100" max="100" value={frameImages[activeFrameSlot].yOffset} onChange={(e) => handleFrameImageUpdate(activeFrameSlot, { yOffset: parseInt(e.target.value) })} />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                          <span>Rotation</span>
                          <span>{frameImages[activeFrameSlot].rotation}°</span>
                        </div>
                        <input type="range" min="0" max="360" value={frameImages[activeFrameSlot].rotation} onChange={(e) => handleFrameImageUpdate(activeFrameSlot, { rotation: parseInt(e.target.value) })} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {productId === "letterhead" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Letterhead Custom Logo</span>
                <div className="flex gap-2">
                  <button type="button" onClick={triggerFileSelect} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    <FaUpload />
                    <span>Upload Logo Graphic</span>
                  </button>
                  {letterheadImage.url && (
                    <button type="button" onClick={clearImage} className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer">
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {letterheadImage.url && (
                <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Logo Zoom</span>
                      <span>{letterheadImage.zoom.toFixed(1)}x</span>
                    </div>
                    <input type="range" min="0.5" max="5.0" step="0.1" value={letterheadImage.zoom} onChange={(e) => handleLetterheadImageUpdate({ zoom: parseFloat(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Horizontal Shift</span>
                      <span>{letterheadImage.xOffset}px</span>
                    </div>
                    <input type="range" min="-50" max="50" value={letterheadImage.xOffset} onChange={(e) => handleLetterheadImageUpdate({ xOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Vertical Shift</span>
                      <span>{letterheadImage.yOffset}px</span>
                    </div>
                    <input type="range" min="-50" max="50" value={letterheadImage.yOffset} onChange={(e) => handleLetterheadImageUpdate({ yOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Rotation</span>
                      <span>{letterheadImage.rotation}°</span>
                    </div>
                    <input type="range" min="0" max="360" value={letterheadImage.rotation} onChange={(e) => handleLetterheadImageUpdate({ rotation: parseInt(e.target.value) })} />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Company Business Name</span>
                <input type="text" value={letterheadName} onChange={(e) => setLetterheadName(e.target.value)} placeholder="Type name" className="w-full text-xs font-semibold border border-slate-200 rounded-lg p-2 outline-none" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Contact Details</span>
                <input type="text" value={letterheadAddress} onChange={(e) => setLetterheadAddress(e.target.value)} placeholder="Type address & phone" className="w-full text-xs font-semibold border border-slate-200 rounded-lg p-2 outline-none" />
              </div>
            </div>
          )}

          {productId === "notebook" && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Notebook Cover Graphic</span>
                <div className="flex gap-2">
                  <button type="button" onClick={triggerFileSelect} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                    <FaUpload />
                    <span>Upload Cover Graphic</span>
                  </button>
                  {notebookImage.url && (
                    <button type="button" onClick={clearImage} className="bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold py-2 px-3 rounded-lg text-xs transition-colors cursor-pointer">
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {notebookImage.url && (
                <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-200/50 space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Cover Zoom</span>
                      <span>{notebookImage.zoom.toFixed(1)}x</span>
                    </div>
                    <input type="range" min="0.5" max="5.0" step="0.1" value={notebookImage.zoom} onChange={(e) => handleNotebookImageUpdate({ zoom: parseFloat(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Horizontal Shift</span>
                      <span>{notebookImage.xOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={notebookImage.xOffset} onChange={(e) => handleNotebookImageUpdate({ xOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Vertical Shift</span>
                      <span>{notebookImage.yOffset}px</span>
                    </div>
                    <input type="range" min="-100" max="100" value={notebookImage.yOffset} onChange={(e) => handleNotebookImageUpdate({ yOffset: parseInt(e.target.value) })} />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-500 mb-0.5">
                      <span>Rotation</span>
                      <span>{notebookImage.rotation}°</span>
                    </div>
                    <input type="range" min="0" max="360" value={notebookImage.rotation} onChange={(e) => handleNotebookImageUpdate({ rotation: parseInt(e.target.value) })} />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Spiral Wire Accent Accent</span>
                <div className="flex gap-2">
                  {[
                    { val: "#c0c0c0", name: "Silver" },
                    { val: "#d4af37", name: "Gold" },
                    { val: "#000000", name: "Black" },
                  ].map((wire) => (
                    <button key={wire.val} type="button" onClick={() => setNotebookWire(wire.val)} className={`py-1 px-3 border rounded-lg text-xs font-bold flex-1 ${notebookWire === wire.val ? "border-blue-600 bg-blue-50/20 text-blue-700" : "border-slate-200 bg-white"}`}>{wire.name}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-400 block uppercase">Diary Cover Title</span>
                <input type="text" value={notebookTitle} onChange={(e) => setNotebookTitle(e.target.value)} placeholder="Type notebook title" className="w-full text-xs font-semibold border border-slate-200 rounded-lg p-2 outline-none" />
              </div>
            </div>
          )}

          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                setMugDesign("standard");
                setPenDesign("classic");
                setPlateDesign("rectangle");
                setFrameDesign("oak");
                setLetterheadDesign("modern");
                setNotebookDesign("classic");
                setMugSize("11 Oz");
                setPenSize("Standard");
                setPlateSize('12" x 6"');
                setFrameSize('16" x 16"');
                setLetterheadSize("A4");
                setNotebookSize("A5");
                setMugImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
                setPenImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
                setLetterheadImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
                setNotebookImage({ url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 });
                setFrameImages({
                  0: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                  1: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                  2: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                  3: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                  4: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                  5: { url: null, zoom: 1.0, xOffset: 0, yOffset: 0, rotation: 0 },
                });
                setMugText("Coffee Time");
                setPenText("Alex Mercer");
                setPenTextColor("#ffffff");
                setPenColor("#1e293b");
                setPenTrim("#d4af37");
                setPlateTitle("Dr. Olivia Bennett");
                setPlateSubtitle("Chief Medical Officer");
                setPlateTitleColor("#1e293b");
                setPlateSubtitleColor("#64748b");
                setPlateMounts("#d4af37");
                setNotebookTitle("My Daily Thoughts");
                setNotebookWire("#c0c0c0");
                setLetterheadName("Acme Corporation");
                setLetterheadAddress("123 Innovation Way, Tech Park");
              }}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer border border-slate-200/60"
            >
              Reset All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
