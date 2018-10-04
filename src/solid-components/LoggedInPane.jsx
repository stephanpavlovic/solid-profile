import withWebId from './withWebId';

/** Pane that only shows its contents when the user is logged in. */
export default withWebId(({ webId, children }) => webId ? children : null);
