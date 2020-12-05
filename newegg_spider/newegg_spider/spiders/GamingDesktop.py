import scrapy

class GamingdesktopSpider(scrapy.Spider):
    name = 'GamingDesktop'
    allowed_domains = ['newegg.com']
    start_urls = ['https://www.newegg.com/p/pl?N=100019096%20600030537%20600014652%20600014655&PageSize=60']

    def parse(self, response):
        products = response.xpath('//*[@class="item-container"]')
        for product in products:
            url = product.xpath('.//a[contains(@class, "item-img")]/@href').extract_first()
            yield scrapy.Request(url, callback=self.parse_product,
                                meta={"URL": url})
        
    
    def parse_product(self, response):
        url = response.meta.get("URL")
        img = response.xpath('//*[@class="product-view-img-original"]/@src').extract_first()
        title = response.xpath('//h1[@class="product-title"]/text()').extract_first()
        intPrice = response.xpath('//li[@class="price-current"]/strong/text()').extract_first()
        centPrice = response.xpath('//li[@class="price-current"]/sup/text()').extract_first()
        price = intPrice + centPrice
        cpu = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[4]/tbody/tr[1]/td/text()').extract_first()
        gpu = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[5]/tbody/tr/td/text()').extract_first()
        memory = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[6]/tbody/tr[1]/td/text()').extract_first()
        storage = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[7]/tbody/tr[1]/td/text()').extract_first()
        yield{
            "URL":url,
            "Title":title,
            "Image":img,
            "Price":price,
            "CPU":cpu,
            "GPU":gpu,
            "Memory":memory,
            "Storage":storage,
            "Type": "Desktop",
            "Usage":"Gaming"
        }
