export default { title: 'ASUCMS/Quote With Animation' };

export const defaultQuote = () => `
  <div class="container space-for-scrolling">
    <div>
      <h4>The ASU difference:</h4>
    </div>
    <div>
      <h1>We are measured not by whom we <span class="highlight-on-scroll-text">exclude,</span> but by whom we <span class="highlight-on-scroll-text">include</span> and how they <span class="highlight-on-scroll-text">succeed</span></h1>
    </div>
    <div>
      <span>
        —
      </span>
      <span>
        Excerpt from ASU charter
      </span>
    </div>
    <script>
      document.querySelectorAll('.highlight-on-scroll-text').forEach((elem) => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
              console.log('intersecting!');
              entry.target.classList.add('animate-bg-in-scroll');
            }
          });
        });
        observer.observe(elem);
      });

    </script>
  </div>
`;
