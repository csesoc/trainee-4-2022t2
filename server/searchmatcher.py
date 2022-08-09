input = "Code or die"
sites = {
    "code or die": 0,
    "site filler": 0
}

input = input.lower()

for site in sites:
    i = len(site)
    matching = ""
    while i > 3:
        for j in range(len(site) - i + 1):
            while site[j:j + i + 1] in input:
                matching = matching + site[j:j + i + 1]
        i = i - 1
    sites[site] = len(matching)

max_site = "code or die"
for site in sites:
    if sites[max_site] < sites[site]:
        max_site = site

print(site)