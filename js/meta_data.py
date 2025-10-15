import requests
from bs4 import BeautifulSoup

def get_page_metadata(url):
    response = requests.get(url, timeout=10)
    soup = BeautifulSoup(response.text, "html.parser")

    metadata = {
        "title": soup.title.string if soup.title else None,
        "description": None,
        "keywords": None,
        "og_title": None,
        "og_description": None,
        "og_image": None,
    }

    # Standard meta tags
    description = soup.find("meta", attrs={"name": "description"})
    keywords = soup.find("meta", attrs={"name": "keywords"})

    # Open Graph tags
    og_title = soup.find("meta", property="og:title")
    og_description = soup.find("meta", property="og:description")
    og_image = soup.find("meta", property="og:image")

    if description:
        metadata["description"] = description.get("content")
    if keywords:
        metadata["keywords"] = keywords.get("content")
    if og_title:
        metadata["og_title"] = og_title.get("content")
    if og_description:
        metadata["og_description"] = og_description.get("content")
    if og_image:
        metadata["og_image"] = og_image.get("content")

    return metadata

# Example usage
url = "https://example.com"
info = get_page_metadata(url)
for key, value in info.items():
    print(f"{key}: {value}")
