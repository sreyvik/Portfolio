/**
 * particles.js - Interactive Canvas Particles Simulation Background
 * Runs smoothly in the background, tracks mouse, reacts to dark/light theme.
 */
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.active = true;

        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.particleCount = window.innerWidth < 768 ? 26 : 60;
    }

    init() {
        this.particles = [];
        this.updateColors();

        for (let i = 0; i < this.particleCount; i++) {
            const size = Math.random() * 2 + 1.2;
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                radius: size
            });
        }
    }

    updateColors() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        this.dotColor = isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.22)';
        this.lineColor = isDark ? 'rgba(14, 165, 233, 0.08)' : 'rgba(99, 102, 241, 0.06)';
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        document.addEventListener('visibilitychange', () => {
            this.active = document.visibilityState === 'visible';
        });
    }

    drawLines() {
        const len = this.particles.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 125) {
                    const opacity = (1 - distance / 125) * 0.7;
                    this.ctx.strokeStyle = this.lineColor.replace('0.06', opacity.toFixed(2)).replace('0.08', opacity.toFixed(2));
                    this.ctx.lineWidth = 0.8;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }

            if (this.mouse.x && this.mouse.y) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const opacity = (1 - distance / this.mouse.radius) * 0.45;
                    this.ctx.strokeStyle = this.lineColor.replace('0.06', opacity.toFixed(2)).replace('0.08', opacity.toFixed(2));
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        if (!this.canvas) return;
        if (!this.active) {
            setTimeout(() => this.animate(), 100);
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx = -p.vx;
            if (p.y < 0 || p.y > this.canvas.height) p.vy = -p.vy;

            this.ctx.fillStyle = this.dotColor;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.drawLines();
        requestAnimationFrame(() => this.animate());
    }
}
