import scrapy

class StudentlaptopSpider(scrapy.Spider):
    name = 'StudentLaptop'
    allowed_domains = ['www.newegg.com']
    start_urls = ['http://www.newegg.com/p/pl?N=100006740&PageSize=60']

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
        cpu = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[3]/tbody/tr[1]/td/text()').extract_first()
        gpu = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[6]/tbody/tr/td/text()').extract_first()
        memory = response.xpath('//*[@id="product-details"]/div[2]/div[2]/table[8]/tbody/tr[1]/td/text()').extract_first()
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
            "Type": "Laptop",
            "Usage":"Business"
        }
