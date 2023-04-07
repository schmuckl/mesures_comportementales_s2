### * Lecture des fichiers JSON en R
library(rjson)
library(lme4)
library(pryr)

### ** Récupération des données sur Internet

webdir <- "https://rafael.laboissiere.net/m1-miashs-2022-s1/quohk8Ee/data/"

page <- readLines (con = webdir)
page

### ** Extraction des noms des fichiers

stringLimite <- "2023-03-23-08-00-00"
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
dataexp.raw <- list ()
for (f in files) {
  ## Compose URL
  url <- paste (webdir, f, sep = "")
  ## Extrait timestamp
  timestamp <- strsplit (f, "\\.") [[1]] [1]
  ## Sauvegarde dans la liste sous le champ "timestamp"
  dataexp.raw [[timestamp]] <- fromJSON (file = url)
  ## Indicateur de progression
  cat (sprintf ("Read file %s\r", f))
}


test <- list()
for (i in 1:length(dataexp.raw)) {
  sujet <- as.data.frame (dataexp.raw[[i]]$sujet)
  liste <- as.data.frame (dataexp.raw[[i]]$liste)
  
  test_res <- list()
  resultat_a_formater <- dataexp.raw[[i]]$resultat
  for (y in 1:length(resultat_a_formater)) {
    
    positions_curseurs <- list()
    
    for (element in resultat_a_formater[[y]]$positions_curseurs) {
      positions_curseurs[[length(positions_curseurs) + 1]] <- element
    }
    
    test_pos_curseur <- list()
    
    for (j in 1:length(positions_curseurs)) {
      test_pos_curseur[[j]] <- as.data.frame (positions_curseurs[[j]])
    }
    
    resultat_a_formater[[y]]$positions_curseurs <- NULL
    
    test_res[[y]] <- list(info_gen = as.data.frame (resultat_a_formater[[y]]),
                                                    curseur = test_pos_curseur)
  }
  
  
  test[[i]] <- list(info_sujet = sujet, resultats = test_res, liste = liste)
}

dataset <- as.data.frame (dataexp.raw)

cat ("\n")

length (dataexp.raw)

str (dataexp.raw)