import React, { useEffect, useRef } from 'react';
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    // Create network nodes
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];
    const nodeCount = Math.floor(window.innerWidth / 80);
    const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(20, 184, 166, 0.5)', 'rgba(168, 85, 247, 0.5)'];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });
      // Connect nodes with lines if close enough
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 180) {
            // Create gradient line
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, nodes[i].color.replace('0.5', `${0.15 * (1 - distance / 180)}`));
            gradient.addColorStop(1, nodes[j].color.replace('0.5', `${0.15 * (1 - distance / 180)}`));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawNetwork);
    };
    drawNetwork();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-50" />;
}