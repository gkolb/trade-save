import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function ClassMenu() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Warrior</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Smith of Kitava</MenubarItem>
            <MenubarItem>Titan</MenubarItem>
            <MenubarItem>Warbringer</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Mercenary</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Witchhunter</MenubarItem>
            <MenubarItem>Gemling Legionnaire</MenubarItem>
            <MenubarItem>Tactician</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Witch</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Lich</MenubarItem>
            <MenubarItem>Infernalist</MenubarItem>
            <MenubarItem>Blood Mage</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
