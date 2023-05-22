const metricsLink = '![Metrics](https://metrics.lecoq.io/dcdnce?template=classic&base.header=0&base.activity=0&base.community=0&base.repositories=0&base.metadata=0&calendar=1&languages=1&base=header%2C%20activity%2C%20community%2C%20repositories%2C%20metadata&base.indepth=false&base.hireable=false&base.skip=false&languages=false&languages.limit=3&languages.threshold=0%25&languages.other=false&languages.colors=github&languages.sections=most-used&languages.indepth=true&languages.analysis.timeout=15&languages.analysis.timeout.repositories=7.5&languages.categories=markup%2C%20programming&languages.recent.categories=markup%2C%20programming&languages.recent.load=300&languages.recent.days=14&calendar=false&calendar.limit=1&config.timezone=Europe%2FParis)'; 
const converter = new showdown.Converter();
const htmlContent = converter.makeHtml(metricsLink);

const metricsDiv = document.getElementById('metrics').innerHTML = htmlContent;