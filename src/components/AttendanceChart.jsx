import React, { useEffect, useRef, useState } from "react";

const AttendanceChart = ({ attendanceData, courseData }) => {
  const canvasRef = useRef(null);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle different prop structures
  const data = attendanceData || (courseData?.subjects) || [];

  useEffect(() => {
    if (!canvasRef.current || !data || data.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Chart dimensions
    const chartWidth = canvasRef.current.width - 100;
    const chartHeight = canvasRef.current.height - 120;
    const barWidth = Math.min(100, chartWidth / data.length - 30);
    const spacing = (chartWidth - barWidth * data.length) / (data.length + 1);

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = "#D0D5DD"; // Light gray for axes
    ctx.lineWidth = 2;
    ctx.moveTo(60, 40);
    ctx.lineTo(60, chartHeight + 50);
    ctx.lineTo(chartWidth + 70, chartHeight + 50);
    ctx.stroke();

    // Draw y-axis labels (0-100%)
    ctx.fillStyle = "#667085"; // Text color from Figma
    ctx.font = "14px Inter, sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 100; i += 20) {
      const y = chartHeight + 50 - (i / 100) * chartHeight;
      ctx.fillText(i + "%", 55, y + 5);
      
      // Draw horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = "#EAECF0"; // Very light gray for grid lines
      ctx.lineWidth = 0.5;
      ctx.moveTo(60, y);
      ctx.lineTo(chartWidth + 70, y);
      ctx.stroke();
    }

    // Draw bars
    data.forEach((subject, index) => {
      const x = 60 + spacing + (barWidth + spacing) * index;
      const barHeight = (subject.attendance / 100) * chartHeight;
      const y = chartHeight + 50 - barHeight;

      // Get bar color based on attendance
      let barColor;
      if (subject.attendance >= 75) {
        barColor = "#12B76A"; // Green
      } else {
        barColor = "#F04438"; // Red
      }
      
      // Highlight hovered bar
      if (hoveredBar === index) {
        barColor = subject.attendance >= 75 ? "#0F9F5F" : "#E53E3E";
      }
      
      // Draw bar with gradient and shadow
      const gradient = ctx.createLinearGradient(x, y, x, chartHeight + 50);
      gradient.addColorStop(0, barColor);
      gradient.addColorStop(1, barColor + "AA");
      
      // Add shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Add subtle border to bar
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, barWidth, barHeight);

      // Draw attendance percentage on top of bar
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(subject.attendance + "%", x + barWidth / 2, y - 8);

      // Draw subject name horizontally below the bar
      ctx.fillStyle = "#344054";
      ctx.font = "13px Inter, sans-serif";
      ctx.textAlign = "center";
      
      // Split long names into multiple lines if needed
      const name = subject.name;
      if (name.length > 12) {
        const words = name.split(' ');
        if (words.length > 1) {
          ctx.fillText(words[0], x + barWidth / 2, chartHeight + 70);
          ctx.fillText(words.slice(1).join(' ').substring(0, 10), x + barWidth / 2, chartHeight + 85);
        } else {
          ctx.fillText(name.substring(0, 12), x + barWidth / 2, chartHeight + 70);
          ctx.fillText(name.substring(12, 24), x + barWidth / 2, chartHeight + 85);
        }
      } else {
        ctx.fillText(name, x + barWidth / 2, chartHeight + 70);
      }
    });

    // Draw chart title with styling
    ctx.fillStyle = "#1F2937";
    ctx.font = "bold 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("📊 Subject Attendance Overview", canvasRef.current.width / 2, 25);

  }, [data, hoveredBar]);

  const handleMouseMove = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setMousePos({ x: event.clientX, y: event.clientY });
    
    // Check if mouse is over a bar
    const chartWidth = canvasRef.current.width - 100;
    const chartHeight = canvasRef.current.height - 120;
    const barWidth = Math.min(100, chartWidth / data.length - 30);
    const spacing = (chartWidth - barWidth * data.length) / (data.length + 1);
    
    let hoveredIndex = null;
    data.forEach((subject, index) => {
      const barX = 60 + spacing + (barWidth + spacing) * index;
      const barHeight = (subject.attendance / 100) * chartHeight;
      const barY = chartHeight + 50 - barHeight;
      
      if (x >= barX && x <= barX + barWidth && y >= barY && y <= chartHeight + 50) {
        hoveredIndex = index;
      }
    });
    
    setHoveredBar(hoveredIndex);
  };

  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div className="w-full h-full flex justify-center relative">
      {data && data.length > 0 ? (
        <>
          <canvas 
            ref={canvasRef} 
            width={900} 
            height={550} 
            className="max-w-full cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
          {hoveredBar !== null && (
            <div 
              className="absolute bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl pointer-events-none z-10 border border-white/20"
              style={{
                left: mousePos.x - 100,
                top: mousePos.y - 70,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="font-semibold text-sm">{data[hoveredBar].name}</div>
              <div className="text-xs opacity-90">{data[hoveredBar].attendance}% Attendance</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-64 text-[#667085]">
          No attendance data available
        </div>
      )}
    </div>
  );
};

export default AttendanceChart;