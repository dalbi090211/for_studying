Blockly.Blocks['lightswitch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("turn")
          .appendField(new Blockly.FieldDropdown([["red","R"], ["blue","B"]]), "lightcolor")
          .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };