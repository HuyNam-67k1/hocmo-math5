// Support send event for Moengage
export function safeMoeEvent(name: string, data: any) {
  try {
    // @ts-expect-error xxx
    // eslint-disable-next-line no-undef
    Moengage.track_event(name, data);
  } catch (e) {
    // do nothing
  }
}

export function safeMoeDestroySession() {
  try {
    // @ts-expect-error xxx
    // eslint-disable-next-line no-undef
    Moengage.destroy_session();
  } catch (e) {
    // do nothing
  }
}

export function safeAddUserId(id: any) {
  try {
    // @ts-expect-error xxx
    // eslint-disable-next-line no-undef
    Moengage.add_unique_user_id(id);
  } catch (e) {
    // do nothing
  }
}

export function safeUpdateUserId(id: any) {
  try {
    // @ts-expect-error xxx
    // eslint-disable-next-line no-undef
    Moengage.update_unique_user_id(id);
  } catch (e) {
    // do nothing
  }
}
