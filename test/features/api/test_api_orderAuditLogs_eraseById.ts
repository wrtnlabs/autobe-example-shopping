import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { IDeleteConfirmation } from "@ORGANIZATION/PROJECT-api/lib/structures/IDeleteConfirmation";

export async function test_api_orderAuditLogs_eraseById(
  connection: api.IConnection,
) {
  const output: IDeleteConfirmation =
    await api.functional.orderAuditLogs.eraseById(connection, {
      id: typia.random<string & tags.Format<"uuid">>(),
    });
  typia.assert(output);
}
