        // 切换章节展开/收起
        function toggleChapter(header) {
            const card = header.parentElement;
            const isActive = card.classList.toggle('active');
            header.setAttribute('aria-expanded', String(isActive));
        }

        function handleChapterKeydown(event, header) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleChapter(header);
            }
        }

        // 切换导航
        function toggleNav(forceState = null) {
            const nav = document.getElementById('navLinks');
            const button = document.querySelector('.nav-toggle');
            if (!nav) return;
            const nextState = forceState === null ? !nav.classList.contains('active') : forceState;
            nav.classList.toggle('active', nextState);
            if (button) button.setAttribute('aria-expanded', String(nextState));
        }

        function expandChapterFromHash() {
            if (!window.location.hash) return;
            const target = document.querySelector(window.location.hash);
            if (target && target.classList.contains('chapter-card')) {
                const header = target.querySelector('.chapter-header');
                target.classList.add('active');
                if (header) header.setAttribute('aria-expanded', 'true');
            }
        }

        // 滚动到顶部
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 显示/隐藏返回顶部按钮
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (!backToTop) return;
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const chapters = document.querySelectorAll('.chapter-card');
            chapters.forEach(function(chapter, index) {
                const header = chapter.querySelector('.chapter-header');
                const expanded = chapter.classList.contains('active');
                if (header) header.setAttribute('aria-expanded', String(expanded));
                if (index === 0 && !document.querySelector('.chapter-card.active')) {
                    chapter.classList.add('active');
                    if (header) header.setAttribute('aria-expanded', 'true');
                }
            });

            const navLinks = document.querySelectorAll('#navLinks a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    toggleNav(false);
                });
            });

            expandChapterFromHash();
        });

        window.addEventListener('hashchange', expandChapterFromHash);
