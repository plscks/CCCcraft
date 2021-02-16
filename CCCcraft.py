worlds["CCCcraft"] = "C:/Users/plsck/CCCcraft_world"

# POI Filters

def playerIcons(poi):
    if poi['id'] == 'Player':
        poi['icon'] = "http://overviewer.org/avatar/%s" % poi['EntityId']
        return "Last known location for %s" % poi['EntityId']


def signFilter(poi):
    if poi['id'] == 'Sign' or poi['id'] == 'minecraft:sign':
        if poi['Text1'] == '' and poi['Text2'] == '' and poi['Text3'] == '' and poi['Text4'] == '':
            return
        else:
            return "\n".join([poi['Text1'], poi['Text2'], poi['Text3'], poi['Text4']])


def chestFilter(poi):
    if poi['id'] == "Chest" or poi['id'] == 'minecraft:chest':
        if 'Items' in poi:
            return "Chest with %d items" % len(poi['Items'])
        else:
            return 'Chest'

# End smooth lighting
end_smooth_lighting = [Base(), EdgeLines(), SmoothLighting(strength=0.5)]

renders["survivalday"] = {
    "world": "CCCcraft",
    "title": "CCCcraft Daytime",
    "rendermode": smooth_lighting,
    "dimension": "overworld",
    "markers": [dict(name="All Signs", filterFunction=signFilter),
                dict(name="Chests",    filterFunction=chestFilter, icon="images/chest.png"),
                dict(name="Players",   filterFunction=playerIcons)],
    "northdirection" : "upper-right",
}

renders["survivalnight"] = {
    "world": "CCCcraft",
    "title": "CCCcraft Nighttime",
    "rendermode": smooth_night,
    "dimension": "overworld",
    "northdirection" : "upper-right",
}

renders["survivalnether"] = {
    "world": "CCCcraft",
    "title": "CCCcraft Nether",
    "rendermode": nether_smooth_lighting,
    "dimension": "nether",
    "markers": [dict(name="All Signs", filterFunction=signFilter),
                dict(name="Chests",    filterFunction=chestFilter, icon="images/chest.png"),
                dict(name="Players",   filterFunction=playerIcons)],
    "northdirection" : "upper-right",
}

renders["survivaltheend"] = {
    "world": "CCCcraft",
    "title": "CCCcraft The End",
    "rendermode": end_smooth_lighting,
    "dimension": "end",
    "markers": [dict(name="All Signs", filterFunction=signFilter),
                dict(name="Chests",    filterFunction=chestFilter, icon="images/chest.png"),
                dict(name="Players",   filterFunction=playerIcons)],
    "northdirection" : "upper-right",
}

outputdir = "C:/Users/plsck/PhpstormProjects/CCCcraft"
