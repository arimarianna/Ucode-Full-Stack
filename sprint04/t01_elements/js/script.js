function listAttributes() {
    let attrs = document.getElementById('characters').children;

    for (let i = 0; i < attrs.length; i++) {
        let attributeClass = attrs[i].getAttribute('class');
        let attributeData = attrs[i].getAttribute('data-element')

        if (attributeClass !== 'good' && attributeClass !== 'evil' || attributeClass !== 'unknown') {
            attrs[i].attributeClass = 'unknown'
        }
        if (!attributeData) {
            attrs[i].setAttribute('data-element', 'none');
        }

        attrs[i].appendChild(document.createElement('br'));

        if (attrs[i].getAttribute('data-element') === 'none') {
            let cirlce = document.createElement('div');
            let line = document.createElement('div');

            cirlce.setAttribute('class', `elem ${attributeData}`);
            attrs[i].appendChild(cirlce);
            line.setAttribute('class', 'line');
            cirlce.appendChild(line)
        }
        else {
            attributeData = attrs[i].getAttribute('data-element').split(' ');
            for (let j = 0; j < attributeData.length; j++) {
                let circle = document.createElement('div');

                circle.setAttribute('class', `elem ${attributeData[j]}`);
                attrs[i].appendChild(circle);
            }
        }
    }
}

listAttributes()
