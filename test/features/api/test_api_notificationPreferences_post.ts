import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { INotificationPreference } from "@ORGANIZATION/PROJECT-api/lib/structures/INotificationPreference";

export async function test_api_notificationPreferences_post(
  connection: api.IConnection,
) {
  const output: INotificationPreference =
    await api.functional.notificationPreferences.post(connection, {
      body: typia.random<INotificationPreference.ICreate>(),
    });
  typia.assert(output);
}
