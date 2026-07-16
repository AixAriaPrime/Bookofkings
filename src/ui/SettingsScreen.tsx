export function SettingsScreen() {
  return (
    <section className="settings-view reveal">
      <header className="section-heading">
        <p className="eyebrow">Your manuscript</p>
        <h1>Settings</h1>
      </header>

      <div className="settings-group">
        <h2 className="settings-group-title">Account</h2>
        <ul className="settings-list">
          <li className="settings-row">
            <span className="settings-label">Plan</span>
            <span className="settings-value">Guest</span>
          </li>
          <li className="settings-row settings-row--action">
            <span className="settings-label">Upgrade to Premium</span>
            <span className="settings-chevron">›</span>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h2 className="settings-group-title">Ritual</h2>
        <ul className="settings-list">
          <li className="settings-row">
            <span className="settings-label">Daily reminder</span>
            <span className="settings-value">Off</span>
          </li>
          <li className="settings-row">
            <span className="settings-label">Notification time</span>
            <span className="settings-value">—</span>
          </li>
          <li className="settings-row settings-row--action">
            <span className="settings-label">Reset today's ritual</span>
            <span className="settings-chevron">›</span>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h2 className="settings-group-title">Appearance</h2>
        <ul className="settings-list">
          <li className="settings-row">
            <span className="settings-label">Theme</span>
            <span className="settings-value">Parchment</span>
          </li>
          <li className="settings-row">
            <span className="settings-label">Card template</span>
            <span className="settings-value">Lapis</span>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h2 className="settings-group-title">Privacy</h2>
        <ul className="settings-list">
          <li className="settings-row settings-row--action">
            <span className="settings-label">Clear all local data</span>
            <span className="settings-chevron settings-chevron--danger">›</span>
          </li>
        </ul>
      </div>

      <div className="settings-group">
        <h2 className="settings-group-title">About</h2>
        <ul className="settings-list">
          <li className="settings-row">
            <span className="settings-label">Book of Kings</span>
            <span className="settings-value">v0.1.0</span>
          </li>
          <li className="settings-row">
            <span className="settings-label">کتاب شاهان</span>
            <span className="settings-value">✦</span>
          </li>
          <li className="settings-row settings-row--action">
            <span className="settings-label">Privacy policy</span>
            <span className="settings-chevron">›</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
