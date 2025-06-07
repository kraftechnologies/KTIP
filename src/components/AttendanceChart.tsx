import React, { useEffect, useRef } from "react";

interface Subject {
  id: number;
  name: string;
  attendance: number;
  sessions: number[];
}

interface AttendanceChartProps {
  attendanceData: Subject[];
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ attendanceData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || attendanceData.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Chart dimensions
    const chartWidth = canvasRef.current.width - 60;
    const chartHeight = canvasRef.current.height - 60;
    const barWidth = Math.min(40, chartWidth / attendanceData.length - 10);
    const spacing = (chartWidth - barWidth * attendanceData.length) / (attendanceData.length + 1);

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = "#D0D5DD"; // Light gray for axes
    ctx.lineWidth = 2;
    ctx.moveTo(40, 20);
    ctx.lineTo(40, chartHeight + 30);
    ctx.lineTo(chartWidth + 50, chartHeight + 30);
    ctx.stroke();

    // Draw y-axis labels (0-100%)
    ctx.fillStyle = "#667085"; // Text color from Figma
    ctx.font = "12px Inter, sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 100; i += 20) {
      const y = chartHeight + 30 - (i / 100) * chartHeight;
      ctx.fillText(i + "%", 35, y + 5);
      
      // Draw horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = "#EAECF0"; // Very light gray for grid lines
      ctx.lineWidth = 0.5;
      ctx.moveTo(40, y);
      ctx.lineTo(chartWidth + 50, y);
      ctx.stroke();
    }

    // Draw bars
    attendanceData.forEach((subject, index) => {
      const x = 40 + spacing + (barWidth + spacing) * index;
      const barHeight = (subject.attendance / 100) * chartHeight;
      const y = chartHeight + 30 - barHeight;

      // Get bar color based on attendance
      let barColor;
      if (subject.attendance >= 90) {
        barColor = "#12B76A"; // Green
      } else if (subject.attendance >= 75) {
        barColor = "#7F56D9"; // Purple
      } else if (subject.attendance >= 60) {
        barColor = "#F79009"; // Yellow/Orange
      } else {
        barColor = "#F04438"; // Red
      }
      
      // Draw bar with gradient
      const gradient = ctx.createLinearGradient(x, y, x, chartHeight + 30);
      gradient.addColorStop(0, barColor);
      gradient.addColorStop(1, barColor + "CC"); // Add some transparency
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Add subtle border to bar
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, barWidth, barHeight);

      // Draw subject name
      ctx.fillStyle = "#667085"; // Text color from Figma
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.save();
      ctx.translate(x + barWidth / 2, chartHeight + 45);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(subject.name.substring(0, 12), 0, 0);
      ctx.restore();
    });

    // Draw chart title
    ctx.fillStyle = "#344054"; // Darker text color for title
    ctx.font = "14px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Subject Attendance Percentage", canvasRef.current.width / 2, 15);

  }, [attendanceData]);

  return (
    <div className="w-full h-full flex justify-center">
      {attendanceData.length > 0 ? (
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={300} 
          className="max-w-full"
        />
      ) : (
        <div className="flex items-center justify-center h-64 text-[#667085]">
          No attendance data available
        </div>
      )}
    </div>
  );
};

export default AttendanceChart;