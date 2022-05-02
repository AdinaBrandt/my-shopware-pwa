module.exports = {
  content: [
    "./src/pages/index.vue",
    "./sw-plugins/example/example.vue",
    "./sw-plugins/myLocalPlugin/myLocalPlugin.vue",
    "./src/components/SwFooter.vue"
  ],
  theme: {
    extend: {
      colors:{
        'abo-primary': '#006ab3',
        'abo-secondary': '#009fe3',
        'abogray-dark': '#4a4a49',
        'abogray': '#e3e3e3',
        'abogray-light': '#f6f6f6',
        'btn-primary': '#ff9600',
        'abo-text-grey':'#626262'
      }
    },
  },
  plugins: [
    
  ],
}
