

const specifications = {
    network: {
      technology: "GSM / HSPA / LTE / 5G",
      "2G bands": "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
      "3G bands": "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100",
      "4G bands": "1, 2, 3, 4, 5, 7, 8, 12, 17, 20, 25, 26, 28, 38, 40, 41, 66",
      "5G bands": "1, 3, 5, 7, 8, 20, 28, 38, 40, 41, 66, 77, 78 SA/NSA/Sub6",
      Speed: "HSPA, LTE, 5G",
    },
    launch: {
      Announced: "2024, May 17",
      Status: "Coming soon. Exp. release 2024, June",
    },
    body: {
      Dimensions: "163.9 x 76.5 x 7.8 mm (6.45 x 3.01 x 0.31 in)",
      Weight: "180 g (6.35 oz)",
      Build: "Glass front, silicone polymer (eco leather) back, plastic frame",
      SIM: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
    },
    display: {
      Type: "Super AMOLED+, 120Hz, 1000 nits (HBM)",
      Size: "6.7 inches, 108.4 cm2 (~86.4% screen-to-body ratio)",
      Resolution: "1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
     "": "Always-on display"
    },
    platform: {
      OS: "Android 14, One UI 6.1",
      Chipset: "Qualcomm SM7450-AB Snapdragon 7 Gen 1 (4 nm)",
      CPU: "Octa-core (1x2.4 GHz Cortex-A710 & 3x2.36 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510)",
      GPU: "Adreno 644",
    },
    memory: {
      "Card slot": "microSDXC (uses shared SIM slot)",
      Internal: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM",
    },
    "main camera": {
      Triple:
        '50 MP, f/1.8, (wide), 1/1.56", 1.0µm, PDAF, OIS\n8 MP, f/2.2, 123˚ (ultrawide)\n2 MP, f/2.4, (macro)',
      Features: "LED flash, panorama, HDR",
      Video: "4K@30fps, 1080p@30/60fps, gyro-EIS, OIS",
    },
    "selfie camera": {
      Single: "50 MP, f/2.4, (wide)",
      Video: "4K@30fps, 1080p@30/60fps",
    },
    sound: {
      Loudspeaker: "Yes, with stereo speakers",
      "3.5mm jack": "No",
    },
    comms: {
      WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct",
      Bluetooth: "5.2, A2DP, LE",
      Positioning: "GPS, GALILEO, GLONASS, BDS, QZSS",
      NFC: "Yes",
      Radio: "No",
      USB: "USB Type-C 2.0, OTG",
    },
    features: {
      Sensors:
        "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
    },
    battery: {
      Type: "5000 mAh, non-removable",
      Charging: "45W wired",
    },
    misc: {
      Colors: "Black, Apricot",
      Models: "SM-E556B/DS, SM-E556B",
      SAR: "0.93 W/kg (head)",
    },
  };
  
  const SpecificationFooter = () => {
   
  
    return (
      
      <div className="mt-2 borderCss py-3">
            {Object.entries(specifications).map(([section, details]) => (
              <div key={section} className="mb-4 flex flex-col ">
                <div className="two mb-3">
                  <span className="specTitle ml-2 mb-1">{section.toUpperCase()}</span>
                  <h2 ></h2>
                </div>
                   <table className="table-auto  text-left">
                  <tbody>
                    {Object.entries(details).map(([key, value]) => (
                      <tr key={key} className="border-y mt-1">
                        <th className="px-2 py-1 w-1/4 font-bold text-sm  uppercase">
                          {key}
                        </th>
                        <td className="px-2 py-1 font-semibold  md:text-sm text-xs ">
                          {typeof value === "boolean"
                            ? value
                              ? "Yes"
                              : "No"
                            : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
    );
  };
  
  export default SpecificationFooter;
  