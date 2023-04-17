import { Toolbar } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";

export function Dashboard() {
  return (
    <LayoutBasePage
      title="Dashboard"
      toolbar={<Toolbar searchText="pesquisa aí" showInput />}
    >
      <h1>Dashboard</h1>
    </LayoutBasePage>
  );
}
