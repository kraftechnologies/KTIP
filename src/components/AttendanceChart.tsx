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
    ctx.strokeStyle = "#9CA3AF"; // gray-400
    ctx.lineWidth = 2;
    ctx.moveTo(40, 20);
    ctx.lineTo(40, chartHeight + 30);
    ctx.lineTo(chartWidth + 50, chartHeight + 30);
    ctx.stroke();

    // Draw y-axis labels (0-100%)
    ctx.fillStyle = "#6B7280"; // gray-500
    ctx.font = "12px Inter, sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 100; i += 20) {
      const y = chartHeight + 30 - (i / 100) * chartHeight;
      ctx.fillText(i + "%", 35, y + 5);
      
      // Draw horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = "#E5E7EB"; // gray-200
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

      // Draw bar with gradient
      const gradient = ctx.createLinearGradient(x, y, x, chartHeight + 30);
      
      // Set gradient colors based on attendance
      if (subject.attendance >= 90) {
        gradient.addColorStop(0, "#10B981"); // green-500
        gradient.addColorStop(1, "#34D399"); // green-400
      } else if (subject.attendance >= 75) {
        gradient.addColorStop(0, "#3B82F6"); // blue-500
        gradient.addColorStop(1, "#60A5FA"); // blue-400
      } else if (subject.attendance >= 60) {
        gradient.addColorStop(0, "#F59E0B"); // yellow-500
        gradient.addColorStop(1, "#FBBF24"); // yellow-400
      } else {
        gradient.addColorStop(0, "#EF4444"); // red-500
        gradient.addColorStop(1, "#F87171"); // red-400
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Add border to bar
      ctx.strokeStyle = "#F3F4F6"; // gray-100
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, barWidth, barHeight);

      // Draw subject name
      ctx.fillStyle = "#6B7280"; // gray-500
      ctx.font = "10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.save();
      ctx.translate(x + barWidth / 2, chartHeight + 45);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(subject.name.substring(0, 12), 0, 0);
      ctx.restore();
    });

    // Draw chart title
    ctx.fillStyle = "#1F2937"; // gray-800
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
        <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
          No attendance data available
        </div>
      )}
    </div>
  );
};

export default AttendanceChart;