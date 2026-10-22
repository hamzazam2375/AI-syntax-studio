export function HeroVisual() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <svg className="hero-net" viewBox="0 0 560 420" fill="none">
        <defs>
          <linearGradient id="net-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b7fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2de6d0" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <g stroke="url(#net-stroke)" strokeWidth="1">
          <path d="M70 80 L160 140 L250 90 L340 160 L430 100 L500 170" />
          <path d="M90 220 L180 250 L270 200 L360 260 L450 210" />
          <path d="M160 140 L180 250 M250 90 L270 200 M340 160 L360 260 M430 100 L450 210" />
          <path d="M70 80 L90 220 M500 170 L450 210" />
        </g>
        {[
          [70, 80],
          [160, 140],
          [250, 90],
          [340, 160],
          [430, 100],
          [500, 170],
          [90, 220],
          [180, 250],
          [270, 200],
          [360, 260],
          [450, 210],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill="#9ec5ff" />
        ))}
      </svg>

      <article className="hero-console">
        <header>
          <span />
          <span />
          <span />
          <small>retrieval.py</small>
        </header>
        <pre>
          <code>
            <span className="tok-comment"># grounded generation</span>
            {"\n"}
            <span className="tok-key">chunks</span>
            {" = index.query(q, k="}
            <span className="tok-num">8</span>
            {")\n"}
            <span className="tok-key">risk</span>
            {" = model.score(events)\n"}
            <span className="tok-fn">route</span>
            {"(payload, to="}
            <span className="tok-str">&quot;ops-dashboard&quot;</span>
            {")"}
          </code>
        </pre>
      </article>

      <article className="hero-flow">
        <p>Automation graph</p>
        <ol>
          <li>
            <em>01</em>
            Ingest
          </li>
          <li>
            <em>02</em>
            Retrieve
          </li>
          <li>
            <em>03</em>
            Infer
          </li>
          <li>
            <em>04</em>
            Act
          </li>
        </ol>
      </article>

      <ul className="hero-systems">
        <li>
          <span>RAG</span>
          Vector context
        </li>
        <li>
          <span>Agents</span>
          Orchestrated jobs
        </li>
        <li>
          <span>Edge</span>
          On-device models
        </li>
      </ul>
    </div>
  );
}
