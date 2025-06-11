import django
from werkzeug.http import COOP, dump_header, quote_header_value
from werkzeug.wrappers import Request
from myapp.models import model

dump_header({}, allow_token=True)
quote_header_value("", extra_chars="xyz")

# meant to cause a vuln with SCA rule GHSA-2gwj-7jmv-h26r-python.yaml
x = request.f()
model.annotate(x)

# meant to cause a vuln with SCA rule GHSA-f6f8-9mx6-9mx2-python.yaml
django.utils.translation.get_supported_language_variant(5)

# Werkzeug
def app(environ, start_response):
    request = Request(environ)
    data = request.data
