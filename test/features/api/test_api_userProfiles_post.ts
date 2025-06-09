import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IUserProfile } from "@ORGANIZATION/PROJECT-api/lib/structures/IUserProfile";

export async function test_api_userProfiles_post(connection: api.IConnection) {
  const output: IUserProfile = await api.functional.userProfiles.post(
    connection,
    {
      body: typia.random<IUserProfile.ICreate>(),
    },
  );
  typia.assert(output);
}
