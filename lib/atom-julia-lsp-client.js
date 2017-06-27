'use babel';

import AtomJuliaLspClientView from './atom-julia-lsp-client-view';
import { CompositeDisposable } from 'atom';

export default {

  atomJuliaLspClientView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomJuliaLspClientView = new AtomJuliaLspClientView(state.atomJuliaLspClientViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomJuliaLspClientView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-julia-lsp-client:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomJuliaLspClientView.destroy();
  },

  serialize() {
    return {
      atomJuliaLspClientViewState: this.atomJuliaLspClientView.serialize()
    };
  },

  toggle() {
    console.log('AtomJuliaLspClient was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
