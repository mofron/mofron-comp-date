/**
 * @file date.js
 * @author simpart
 */

/**
 * @class mofron.comp.Date
 * @brief Date Component class
 */
mofron.comp.Date = class extends mofron.Component {
    /**
     * initialize DOM contents
     * 
     * @param prm (object) : Date object
     */
    initDomConts (prm) {
        try {
            this.name('Date');
            
            if ((null !== prm) && ('object' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            
            this.vdom().addChild(new mofron.Dom('div',this));
            this.date((null === prm) ? new Date() : prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    date (dt) {
        try {
            if (undefined === dt) {
                /* getter */
                return (undefined === this.m_date) ? new Date() : this.m_date;
            }
            /* setter */
            if ( (null === dt) || ('object' !== (typeof dt)) ) {
                throw new Error('invalid parameter');
            }
            this.m_date = dt;
            this.updConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    updConts () {
        try {
            var dt = this.date();
            this.target().text(
                dt.getFullYear() + '/' + (dt.getMonth()+1) + '/' + dt.getDate()
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    nextDay (offset) {
        try {
            if (undefined === offset) {
                this.date().setDate(
                    this.date().getDate()+1
                );
            } else {
                if ('number' !== typeof offset) {
                    throw new Error('invalid parameter');
                }
                this.date().setDate(
                    this.date().getDate()+offset
                );
            }
            this.updConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    prevDay (offset) {
        try {
            if (undefined === offset) {
                this.date().setDate(
                    this.date().getDate()-1
                );
            } else {
                if ('number' !== typeof offset) {
                    throw new Error('invalid parameter');
                }
                this.date().setDate(
                    this.date().getDate()-offset
                );
            }
            this.updConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    nextYear(offset) {
        try {
            if (undefined === offset) {
                this.date().setYear(
                    this.date().getFullYear()+1
                );
            } else {
                if ('number' !== typeof offset) {
                    throw new Error('invalid parameter');
                }
                this.date().setYear(
                    this.date().getFullYear()+offset
                );
            }
            this.updConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    prevYear (offset) {
        try {
            if (undefined === offset) {
                this.date().setYear(
                    this.date().getFullYear()-1
                );
            } else {
                if ('number' !== typeof offset) {
                    throw new Error('invalid parameter');
                }
                this.date().setYear(
                    this.date().getFullYear()-offset
                );
            }
            this.updConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.date = {};
module.exports   = mofron.comp.Date;
