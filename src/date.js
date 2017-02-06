/**
 * @file date.js
 * @author simpart
 */

/**
 * @class mofron.comp.Date
 * @brief Date Component class
 */
mofron.comp.Date = class extends mofron.Component {
    
    constructor (prm,opt) {
        try {
            super(prm);
            this.setBaseName('Date');
            this.name('Date');
            
            this.m_select = null;
            this.sel_evt  = null;
            
            if (null !== opt) {
                this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     * 
     * @param prm (object) : Date object
     */
    initDomConts (prm) {
        try {
            var def_dat = new Date();
            if (null !== prm) {
                if ('object' !== (typeof prm)) {
                    def_dat = prm;
                }
            }
            
            this.vdom().addChild(new mofron.util.Vdom('div',this));
            this.select(def_dat);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    selectEvent (fnc) {
        try {
            if (undefined === fnc) {
                return this.sel_evt;
            }
            if ((null === fnc) || ('function' !== typeof fnc)) {
                throw new Error('invalid parameter');
            }
            this.sel_evt = fnc;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    select (sel) {
        try {
            if (undefined === sel) {
                return this.m_select;
            }
            if ('object' !== (typeof sel)) {
                throw new Error('invalid parameter');
            }
            this.vdom().getChild(0).text(
                sel.getFullYear() + '/' + sel.getMonth() + '/' + sel.getDate()
            );
            this.m_select = sel;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
