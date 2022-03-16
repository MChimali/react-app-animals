import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  animal: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  animal: "/:animal",
};

interface LinkRoutes extends Omit<SwitchRoutes, "animal"> {
  animal: (id: string) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  animal: (animal: string) =>
    generatePath(switchRoutes.animal, { animal }),
};