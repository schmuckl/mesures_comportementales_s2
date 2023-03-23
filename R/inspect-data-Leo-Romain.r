
library(rjson)
library(lme4)

### ** Récupération des données sur Internet

webdir <- "https://rafael.laboissiere.net/m1-miashs-2022-s1/quohk8Ee/data/"

page <- readLines (con = webdir)
page

### ** Extraction des noms des fichiers

stringLimite <- "2022-11-28-15-31-00"
dateLimite <- as.POSIXct(stringLimite, format="%Y-%m-%d-%H-%M-%S", tz="UTC")

files <- c ()
for (line in page) {
  m <- regexpr ("[-0-9]+.json", line)
  if (m > 0) {
    filename <- regmatches (line, m)
    datefile <- as.POSIXct(filename, format="%Y-%m-%d-%H-%M-%S", tz="UTC")
    if (difftime(datefile, dateLimite) > 0) {
      files <- c (files, filename) 
    }
  }
}

str (files)

length (files)

### ** Composition des URLs pour les fichiers de chaque participant
for (f in files) {
  url <- paste (webdir, f, sep = "")
  print (url)
}

### ** Extraction du timestamp

for (f in files)
  print (strsplit (f, "\\.") [[1]] [1])

### ** Récupération des données au format JSON

### Initialise une liste vide
exp.data <- list ()
for (f in files) {
  ## Compose URL
  url <- paste (webdir, f, sep = "")
  ## Extrait timestamp
  timestamp <- strsplit (f, "\\.") [[1]] [1]
  ## Sauvegarde dans la liste sous le champ "timestamp"
  exp.data [[timestamp]] <- fromJSON (file = url)
  ## Indicateur de progression
  cat (sprintf ("Read file %s\r", f))
}
cat ("\n")

length (exp.data)

str (exp.data)


x <- sapply (d$resultat[[1]]$positions_curseurs, function(z) z$position_x)
y <- sapply (d$resultat[[1]]$positions_curseurs, function(z) z$position_y)
xn <- (x - x[1]) / (x[length(x)] - x[1])
yn <- (y - y[1]) / (y[length(y)] - y[1])
plot (xn, yn)