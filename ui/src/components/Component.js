import {QInput, QSelect} from 'quasar'
import { CurrencyDirective } from 'vue-currency-input'

export default {
  name: 'Salary',
  props: {
    period: {
      type: String,
      default: 'monatlich'
    },
    value: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'EUR'
    }
  },
  data () {
    return {
      periodOptions: [
        'jährlich', 'monatlich', 'stündlich'
      ],
      currencyOptions: [
        'EUR', 'USD', 'CHF'
      ]
    }
  },
  directives: {
    currency: CurrencyDirective
  },
  methods: {
    emitSalary (event) {
      this.$emit('Salary', this.salary)
    },
    __renderValue(h) {
      return h(QInput,{
        props: {
          value: this.value,
          label: 'Gehalt',
        },
        directives: [{
          name: 'currency',
          value: this.value
        }],
        data: {
          value: this.value
        },
        class: 'col-6'
      })
    },
    __renderCurrency(h) {
      return h(QSelect,{
        props: {
          options:[
            'EUR', 'USD', 'CHF'
          ],
          value: this.currency,
          label: 'Währung',
        },
        data: {
          currency: this.currency
        },
        class: 'col-3'
      })
    },
    __renderPeriod(h) {
      return h(QSelect,{
        props: {
          options:[
            'Stunde', 'Monat', 'Jahr'
          ],
          value: this.period,
          label: 'Zeitraum'
        },
        class: 'col-3'
      })
    }
  },
  render (h) {
    return h('div', {
        class: 'row'
    },[
      this.__renderValue(h),
      this.__renderCurrency(h),
      this.__renderPeriod(h)
    ])
  }
}
