import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IUser } from "@ORGANIZATION/PROJECT-api/lib/structures/IUser";

export async function test_api_users_post(connection: api.IConnection) {
  const output: IUser = await api.functional.users.post(connection, {
    body: typia.random<IUser.ICreate>(),
  });
  typia.assert(output);
}
