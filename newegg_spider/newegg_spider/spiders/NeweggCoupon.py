import scrapy

class NeweggcouponSpider(scrapy.Spider):
    name = 'NeweggCoupon'
    allowed_domains = ['slickdeals.net']
    start_urls = ['http://slickdeals.net/coupons/newegg/?filter=coupons&sort=new/']

    def parse(self, response):
        partUrls = response.xpath('//li[@class="bp-p-offerCard bp-c-card--border bp-p-couponCard bp-c-card"]')
        for partUrl in partUrls:
            partialUrl = partUrl.xpath('.//button/@data-href2').extract_first()
            Url = "https://slickdeals.net" + partialUrl
            yield scrapy.Request(Url, callback=self.parse_coupon)
    
    def parse_coupon(self, response):
        couponCode = response.xpath('//span[contains(@class, "storeCouponModal_code")]/text()').extract_first()
        yield {"Coupon Code": couponCode}