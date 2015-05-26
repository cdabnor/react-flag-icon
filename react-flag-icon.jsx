var ReactFlagIcon = React.createClass({

    render: function() {
        // Create the underlying FlagIcon object
        var flagIcon = new FlagIcon();

        // Pass the properties into the underlying FlagIcon object
        for(k in this.props) {
            var key = k;
            var value = this.props[k];
            // 'key' property was renamed to 'flagKey' as it conflicts with React
            if(k === 'flagKey') {
                key = 'key';
                value = this.props[k];
            }
            flagIcon[key] = value;
        }

        // Process the underlying flagIcon object with the properties that were set
        flagIcon.created();
        flagIcon.refresh();

        // Create CSS style to use for the icon
        var style = {
            background: flagIcon.src ? 'url(' + flagIcon.src + ')' : '',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            width: flagIcon.computedWidth + 'px',
            height: flagIcon.computedHeight + 'px' ,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
        };

        // Return the template
        return (
            <div title={flagIcon.title} role="image" aria-label={flagIcon.title} style={style}></div>
            );
    }
});


