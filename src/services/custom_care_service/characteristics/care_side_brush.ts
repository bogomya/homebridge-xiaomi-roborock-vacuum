import { Characteristic } from "hap-nodejs";

export class CareSideBrush extends Characteristic {
  public static UUID = "00000103-0000-0000-0000-000000000000";
  constructor() {
    super("Care indicator side brush", CareSideBrush.UUID, {
      format: Characteristic.Formats.FLOAT,
      unit: "%",
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY],
    });
    this.value = this.getDefaultValue();
  }
}